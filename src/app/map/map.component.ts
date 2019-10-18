import { Component, OnInit } from '@angular/core';
import { GeoService } from '../services/geo.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  markers: any;
  constructor(
    private geo: GeoService
  ) { }

  ngOnInit() {
    this.getUserLocation();
    this.geo.hits.subscribe(hits => this.markers = hits);
    //this.geo.setLocation("Parque La Familia", [13.338545, -87.839960]);
  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.geo.getLocations(100, [this.lat, this.lng]);
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { GeoService } from '../services/geo.service';
import { User } from '../models/user';
import { AuthGService } from '../auth/auth-g.service';
import { element } from 'protractor';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  user: User;
  lat: number;
  lng: number;
  markers: any;
  constructor(
    private geo: GeoService,
    private auth: AuthGService
  ) {
    this.auth.user$.subscribe(user => {
      this.user =  user;
    }); 
   }

  ngOnInit() {
    this.getUserLocation();
    this.geo.hits.subscribe(hits => this.markers = hits);
    this.getAddress();
    //this.geo.setLocation("Parque La Familia", [13.338545, -87.839960]);
  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.geo.getLocations(5, [this.lat, this.lng]);
      });
    }
  }
  //[latitude, longitude]: Array<number>
  async getAddress(){
    Object.entries(await this.markers).map(([key, val]) => {
      console.log(val);
    });
    this.markers.forEach(element =>  {
      console.log(element);
    });
    //let coords = {
      //lat: latitude,
     // lon: longitude
    //}
    //console.log(coords);
  }
  
}

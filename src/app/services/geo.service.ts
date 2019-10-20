import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { GeoFire } from 'geofire';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  dbRef: any;
  geoFire: any;
  hits = new BehaviorSubject([]);
  constructor(
    private db: AngularFireDatabase
  ) {
    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.query.ref);
  }
  setLocation(key:string, coords: Array<number>){
    this.geoFire.set(key, coords).then(_ => console.log('location update')).catch(err => console.log(err));
  }
  getLocations(radius: number, coords: Array<number>){
    this.geoFire.query({
      center: coords,
      radius: radius
    }).on('key_entered', (key, location, distance) => {
      let hit ={
        key: key,
        location: location,
        distance: distance
      }
      let currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    });
  }
}

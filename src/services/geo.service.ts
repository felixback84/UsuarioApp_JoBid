import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

// import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class GeoService {

	dbRef: any;
	geoFire: any;

	hits = new BehaviorSubject([])

	constructor(private afDB: AngularFireDatabase,
	) {

		this.dbRef = this.afDB.list('locations');
		// this.geoFire = new GeoFire(this.dbRef.$ref);
	}

	setLocations(key: string, coords: Array<number>) {
		this.geoFire.set(key, coords)
			.then(_ => console.log('location updated'))
			.catch(err => console.log(err))
	}

	getLocations(radius: number, coords: Array<number>) {
		this.geoFire.query({
			center: coords,
			radius: radius
		})
			.on('key_entered', (key, location, distance) => {
				let hit = {
					location: location,
					distance: distance
				}

				let currentHits = this.hits.value;
				currentHits.push(hit);
				this.hits.next(currentHits);
			})
	}
}
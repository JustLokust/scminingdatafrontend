import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import LocationJSON from '../../json/locations.json'

@Component({
  selector: 'app-mining-form-location',
  templateUrl: './mining-form-location.component.html',
  styleUrls: ['./mining-form-location.component.sass']
})
export class MiningFormLocationComponent implements OnInit {
  locationjson = LocationJSON
  planetSystem = new FormControl('planetSystem');
  planet = new FormControl('planet');

  constructor() { }

  ngOnInit(): void {
  }

  getPlanetsOfSelectedSystem(){
    try{
      return this.locationjson.find(e => e.planetSystem == this.planetSystem.value).planets
    }
    catch {
      return []
    }
  }

}

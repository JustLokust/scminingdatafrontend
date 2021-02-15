import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import ShipsJson from '../../json/ships.json'

@Component({
  selector: 'app-mining-form-ship',
  templateUrl: './mining-form-ship.component.html',
  styleUrls: ['./mining-form-ship.component.sass']
})
export class MiningFormShipComponent implements OnInit {
  shipsJSON = ShipsJson;

  ship = new FormControl('ship');

  constructor() { }

  ngOnInit(): void {
  }

}

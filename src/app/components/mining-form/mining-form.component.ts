import { Component, OnInit } from '@angular/core';
import { Ore } from 'src/app/interfaces/ore';
import OreJson from '../../json/ores.json'
import {OrelistService} from '../../services/orelist.service'


@Component({
  selector: 'app-mining-form',
  templateUrl: './mining-form.component.html',
  styleUrls: ['./mining-form.component.sass']
})
export class MiningFormComponent implements OnInit {
  totalOreValue: Number = 0;

  constructor(public orelistService: OrelistService) {
    this.getTotalOreValue()
  }

  ngOnInit(): void {
  }
  
  addOre(){
    this.orelistService.addOre()
  }
  getTotalOreValue(){
    this.orelistService.totalOreValue.subscribe( x => this.totalOreValue = x)
  }
}

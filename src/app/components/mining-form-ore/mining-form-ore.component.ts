import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ore } from 'src/app/interfaces/ore';
import OreJson from '../../json/ores.json'
import { FormControl } from '@angular/forms';
import { OrelistService } from 'src/app/services/orelist.service';


@Component({
  selector: 'app-mining-form-ore',
  templateUrl: './mining-form-ore.component.html',
  styleUrls: ['./mining-form-ore.component.sass']
})


export class MiningFormOreComponent implements OnInit {
  @Input() id: Number;
  orejson = OreJson;

  myoretype = new FormControl('myoretype');
  myoreamount = new FormControl('myoreamount');
  
  constructor(public orelistService: OrelistService) { }

  ngOnInit(): void {
    console.log(this.orejson)
    this.myoretype.setValue("")
    this.myoreamount.setValue("")
    
  }
  getSelectedOreValue(){
    try{
      return this.orejson.find(e => e.oretype == this.myoretype.value).value
    }
    catch {
      return "0"
    }
  }
  getOreValue(){
    this.orelistService.updateOre(this.id, this.myoreamount.value, this.myoretype.value)
    return (Number(this.getSelectedOreValue()) * this.myoreamount.value * 100)
  }
  deleteOre(){
    this.orelistService.removeOre(this.id)
    this.orelistService.updateTotalOreValue()
  }

}

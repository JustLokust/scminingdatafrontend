import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ore } from 'src/app/interfaces/ore';
import OreJson from '../json/ores.json'

@Injectable({
  providedIn: 'root'
})
export class OrelistService {

  
  ores : Ore[] = [
    {id: 0, type: "Agricium", amount: 0}
  ]
  orejson = OreJson;
  counter = 1
  
  totalOreValue = new BehaviorSubject<Number>(0)


  constructor() {
  }



  addOre(){
    this.ores.push({id: this.counter, type: "Agricium", amount: 0})
    this.counter++
  }


  updateOre(updateid, updateamount, updatetype){
    let updatingOre = this.ores.find(e => e.id == updateid)
    updatingOre.type = updatetype
    updatingOre.amount = updateamount
    this.updateTotalOreValue()
  }
  removeOre(removeid){
    let oreindex = this.ores.findIndex(e => e.id == removeid)
    this.ores.splice(oreindex, 1)
  }

  updateTotalOreValue(){
    let OreValue = 0
    this.ores.forEach(currentOre => {
      try {
        let currentOreUnitValue = this.orejson.find(e => e.oretype == currentOre.type).value
        OreValue += currentOreUnitValue * currentOre.amount * 100
      }
      catch{}
    })
    this.totalOreValue.next(OreValue)
  }
}

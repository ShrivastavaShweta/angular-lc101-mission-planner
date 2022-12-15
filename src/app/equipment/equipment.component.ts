import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  constructor() { }

  itemBeingEdited: string = null;

  ngOnInit() {
  }

  edit(item: string) {
    this.itemBeingEdited = item;
 }

 save(newItem: string, originalItem: string) {
  if(!this.equipments.includes(newItem)){
    let index = this.equipments.indexOf(originalItem)
    this.equipments.splice(index, 1, newItem);
  }
  this.itemBeingEdited = null;
  }

  remove(item: string) {
    let index = this.equipments.indexOf(item);
    this.equipments.splice(index, 1);
  }

  add(item: string){
    if(!this.equipments.includes(item)){
      this.equipments.push(item);
    }
  }
}

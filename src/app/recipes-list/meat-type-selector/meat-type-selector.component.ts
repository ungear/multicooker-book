import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MeatType } from '../../enums/meatTypes';

@Component({
  selector: 'app-meat-type-selector',
  templateUrl: './meat-type-selector.component.html',
  styleUrls: ['./meat-type-selector.component.scss']
})
export class MeatTypeSelectorComponent implements OnInit {
  @Output() meatTypeChanged = new EventEmitter<MeatType | null>();
  constructor() { }

  options = [
    { name: "-- все --", value: null },
    { name: "говядина", value: [MeatType.beef] },
    { name: "свинина", value: [MeatType.pork] },
    { name: "индейка", value: [MeatType.turkey] },
    { name: "курица", value: [MeatType.chiken] },
    { name: "другое", value: [MeatType.other] },
  ]
  selectedMeatType:MeatType | null  = null;

  ngOnInit(): void {
  }

  onSelectChange(){
    this.meatTypeChanged.emit(this.selectedMeatType);
  }
}
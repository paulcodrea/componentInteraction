import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-select-child-component',
  templateUrl: './select-child-component.component.html',
  styleUrls: ['./select-child-component.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectChildComponentComponent implements OnInit {

  fruitList = ['Banana', 'Orange', 'Apple', 'Mango'];

  @Output() itemSelected = new EventEmitter();

  public selectedIndex;

  emitSelection(item: any, index: number) {
    this.itemSelected.emit(item);
    this.selectedIndex = index;
  }

  constructor() { }

  ngOnInit() { }

  selectItem(item){
    this.itemSelected.emit(item);
  }

}

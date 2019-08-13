import { Component, OnInit, ViewChild } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponentComponent implements OnInit {

  public selectedItem;


  constructor() { }

  ngOnInit() {
  }

  public itemSelected(item){
    
    this.selectedItem = item;
  };

  // mutateObject(){
  //   this.selectedItem.title = 'MUTATED TITLE';
  //   this.selectedItem = Object.assign({}, this.selectedItem);
  // }
}

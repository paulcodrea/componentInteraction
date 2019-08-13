import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-child-component',
  templateUrl: './display-child-component.component.html',
  styleUrls: ['./display-child-component.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayChildComponentComponent implements OnInit {

  @Input() selectedItem;
  

  constructor() { }

  // ngOnChanges(changes: SimpleChanges){

  // THIS WILL CONTAIN AND OLD AND A NEW VALUE 

  //   console.log('ngOnChanges: ', JSON.stringify(changes));
  // }

  ngOnInit() {
    // CALLED RIGHT AFTER ngOnChanges()
    // USE THIS METHOD TO MAKE THE CALLS FOR THE INITIAL DATA OF THE COMPONENT
    console.group('ngOnInit');
  }

  ngDoCheck() {
    // CHANGES THAT ANGULAR COULD NOT AND ACT ACCORDINGLY
    console.log('ngDoCheck');
   }

  ngAfterContentInit(){
    // 
    console.log('ngAfterContentInit');
  }


  ngAfterContentChecked(){
    // 
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
 
  ngAfterViewChecked() {
    // IN EACH CHANGE DETECTION CYCLE
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {

    console.log('ngOnDestroy');
  }

}

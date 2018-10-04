import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isCollapsed: boolean = false;
  arr = [];
  i: number = 0;
  arra() {
    for (this.i = 1; this.i < 101; this.i++) {
      //this.arr[this.i]=this.i;
      //this.setDelay(this.i);
      //(function(i) {
        //setTimeout(function() {
          if((this.i % 3 == 0) && (this.i % 5 == 0)){
            this.arr[this.i] = "EagleCreek";
          }
          else if (this.i % 3 === 0) {
            this.arr[this.i] = "Eagle";
          }
          else if  (this.i % 5 == 0) {
            this.arr[this.i] = "Creek";
          }
          else{
            this.arr[this.i]= this.i;
          }
        
       // }, i * 1000);
    //})(this.i);
    }
    return this.arr;
  }

  constructor() { }

  ngOnInit() {
  }
  toggle()  {
    this.isCollapsed = !this.isCollapsed;
  }
  
}

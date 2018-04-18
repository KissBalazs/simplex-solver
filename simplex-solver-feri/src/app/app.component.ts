import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  simplex = require('simplex-solver');

  line1 = '3x + 2y + z <= 10';
  line2 = '2x + 5y + 3z <= 15';
  x = 2;
  y = 3;
  z = 4;
  result = null;
  base = null;

  constructor(){}

  changed(event, valtozoNev){
    console.log("változás:", event, valtozoNev)
    this.calculate();
  }

  calculate(){
    let inputs = this.x + "x + " + this.y + "y + " + this.z + "z";
    console.log("to find: ", inputs);
    this.result = this.simplex.maximize(inputs, [
      this.line1,
      this.line2
    ]);

    this.base = JSON.stringify(this.result.tableaus);

    console.log("result:", this.result);
  }
}

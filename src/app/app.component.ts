import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  isDisplay:boolean=true;
buttonName='Hide';

changeDisplayValue(){
 this.isDisplay=!this.isDisplay;
 if(this.isDisplay) {
  this.buttonName="Hide";
 } else{
  this.buttonName="Show";
 }
}
//for
rolls=[1,2,3,4,5]

student:{roll:number,name:string}[]=[
  // {roll:101, name:"aa"},
  //  {roll:102, name:"aa"},
  //   {roll:103, name:"aa"},
]

num=2;
one(){
  this.num=1;
}
two(){
  this.num=2;
}
}
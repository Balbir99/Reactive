import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  myclasses={
    visibility:true
  }
  constructor() { }

  ngOnInit(): void {
  }
add(){
  this.myclasses.visibility=false;
 // this.myclasses.visible=true;
}
  addON()
  {
    console.log( "hello" );
  }
}

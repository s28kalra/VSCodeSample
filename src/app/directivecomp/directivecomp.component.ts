import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomp',
  templateUrl: './directivecomp.component.html',
  styleUrls: ['./directivecomp.component.css']
})
export class DirectivecompComponent implements OnInit {

  isValid:boolean=false;
  cities:string[]=["Mumbai","Pune","Delhi"];

  change(v){
    this.isValid=v;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

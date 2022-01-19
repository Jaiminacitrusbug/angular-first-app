import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  userData:any={}

  ngOnInit(): void {
  }
  getData(data:NgForm){
    console.log(`data`, data)
    this.userData=data
  }

}

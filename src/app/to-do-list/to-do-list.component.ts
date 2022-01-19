import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list:any=[]
  addItem(item:string){
    console.log(`item`, item)
    this.list.push(item)

  }
  removeItem(id:number){
    console.log(`item`, id)
    this.list.splice(id,1)

  }

}

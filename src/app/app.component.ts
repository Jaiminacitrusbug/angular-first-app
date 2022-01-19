import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  data="hello code"
  value:String=""
  disabled=false
  show="no"
  color="blue"
  bgColor="green"
  users = ["kreena","Mina","Leena"]
  userDetail = [{
    name:"kreena",
    phone:"64564",
    account:[
      "facebook",
      "insta"
    ]
  },
  {
    name:"Mina",
    phone:"11444451",
    account:[
      "gmail",
      "youtube"
    ]
  },
  {
    name:"Leena",
    phone:"512112",
    account:[
      "yahoo",
      "google"
    ]
  }



]
  getName(name:String | number){
    alert(name)
  }
  getData(name:String)
  {
    console.warn(name);
    this.value=name
  }
  updateColor()
  {
    this.color="red"
    this.bgColor="yellow"
  }
}

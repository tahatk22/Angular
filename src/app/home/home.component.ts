import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
profile = {
  firstName : "TahOsamaa",
  lastName : "Kamal"
}
array = ["Taha" , "Kamal" , "Ahmed"];

linkImage = "";
color = "red";
number = 1;
verify = false;
constructor(private route:Router) {}
ngOnInit(): void {
  
}
Iclick() {
this.number++
}
DClick() {
this.number--
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan = "Your one stop shop for everything."

  source: string = "../../assets/black-friday-elements-assortment.jpg";

  getData = function(){
    return "Kartik"
  }
}

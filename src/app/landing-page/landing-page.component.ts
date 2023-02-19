import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  focusOn(index: number){
    console.log("Focusing");

    window.scroll({ 
      top: window.innerHeight * (index + 1), 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}

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

  primarySkills = [
    "C#",
    ".NET",
    "TypeScript",
    "Unity",
    "HTML",
    "CSS",
    "SQL"
  ]

  showProfileColor: boolean = false;

  focusOn(index: number){
    console.log("Focusing");

    window.scroll({ 
      top: window.innerHeight * (index + 1), 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  contact(){
    window.open("mailto:lucas.fransson@hotmail.com");
  }

  linkedin(){
    window.open("https://www.linkedin.com/in/lucas-fransson-641278192/");
  }

  get profileImage(){
    if(this.showProfileColor){
      return "../../assets/profil_cutout_fade.png";
    }

    return "../../assets/profil_cutout_fade_sketch.png";
  }

  get pageHeight(){
    return document.documentElement.scrollHeight;
  }

  get pageWidth(){
    return document.documentElement.scrollWidth;
  }
}

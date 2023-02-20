import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class AppComponent {
  title = 'portfolio';

  projects = [
    {
      name: "Multiplayer FPS game - Under development",
      summary: "Fast-paced multiplayer FPS game, where you play as robots in a future setting.",
      path: "/",
      imagePath: "",
      skills: [],
      showProject: false
    },
    {
      name: "Casual farming game - Under development",
      summary: "Casual farming game, focusing on visual aspects more than gameplay",
      path: "/",
      imagePath: "",
      skills: [],
      showProject: false
    },
    {
      name: "Forest Generator",
      summary: "Isometric flat forest, randomly generated with a dozen of different plants, trees, bushes and even animals. Optimized to handle big worlds and only render what's being looked at.",
      path: "https://github.com/Cibums/ForestGenerator",
      imagePath: "https://raw.githubusercontent.com/Cibums/ForestGenerator/main/Assets/forest_image.PNG",
      skills: [
        "Unity",
        "C#",
        "3D physics"
      ]
    },
    {
      name: "Turtle Swim",
      summary: "School project for when WWF and our school had a partnership. You are a turtle that should avoid eating plastic in the sea.",
      path: "https://github.com/Cibums/TurtleSwim",
      imagePath: "https://img.itch.zone/aW1nLzIwOTk0MzEucG5n/315x250%23c/mFfVdz.png",
      skills: [
        "Unity",
        "C#",
        "2D physics",
        "Team work"
      ]
    },
    {
      name: "This Website",
      summary: "This is the website you're currently on, where you can find my projects and read some about them.",
      path: "https://github.com/Cibums/portfolio",
      imagePath: "",
      skills: [
        "HTML",
        "SCSS",
        "Typescript",
        "Angular 2"
      ]
    }
  ]

  focusOn(id: string){
    var rect = document.getElementById(id)?.getBoundingClientRect();

    if(rect){
      window.scroll({ 
        top: rect.y, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  }

  onResize(){
  }

  get pageHeight(){
    return document.documentElement.scrollHeight;
  }
}

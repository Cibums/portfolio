import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() projectName: string = "Project";
  @Input() projectSummary: string = "This is a placeholder project";
  @Input() projectPath: string = "/";
  @Input() imagePath: string = "";
  @Input() skills: string[] = [];

  goToProject(){
    window.open(this.projectPath, "_blank");
  }

  get image(){
    if(this.imagePath == ""){
      return "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
    }
    else{
      return this.imagePath;
    }
  }
}
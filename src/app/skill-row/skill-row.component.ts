import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss']
})
export class SkillRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() label = "Skills used:";

  @Input() skills: string[] = [ ]

}

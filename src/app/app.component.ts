import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  projects = [
    {
      name: "Test",
      summary: "rgrgewrgergr"
    },
    {
      name: "Test2",
      summary: "rgrgewrgefefefefergr"
    }
  ]
}

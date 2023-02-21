import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillRowComponent } from './skill-row/skill-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectSummaryComponent,
    AboutMeComponent,
    SkillRowComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

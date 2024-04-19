import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Google Gemini AI Clone',
      technologies: 'React & Gemini-API.',
    },
    {
      title: 'Google Translate Clone',
      technologies: 'Angular 17 & Typescript.',
    },
    {
      title: 'Google Docs Clone',
      technologies: 'MERN Stack, Quill & Socket IO.',
    },
    {
      title: 'Google Keep Clone',
      technologies: 'React.',
    },
    {
      title: 'Google Search Clone',
      technologies: 'Next & React.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

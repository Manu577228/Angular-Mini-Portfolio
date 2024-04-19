import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'React, Angular',
      level: 'Intermidiate',
      rating: 3/5,
    },
    {
      name: 'Java-SpringBoot, Node.js & Express.js',
      level: 'Intermidiate',
      rating: 3/5,
    },
    {
      name: 'HTML, CSS, CSS Frameworks, JS, TS',
      level: 'Intermidiate',
      rating: 3/5,
    },
    {
      name: 'JENKINS & AWS EC2',
      level: 'Intermidiate',
      rating: 3/5,
    },
    {
      name: 'Git',
      level: 'Intermidiate',
      rating: 3/5,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

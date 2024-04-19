import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'Allstate India',
      duration: 'Nov 2022 - Mar 2023',
      description: [
        'Worked on the development of DRROP Project.',
        'Worked on the Dashboard using React & Springboot with MS-SQL.',
      ],
    },
    {
      role: 'Consultant',
      company: 'Techchef Software',
      duration: 'sep 2021 - Nov 2022',
      description: [
        'Worked on various Projects.',
        'Worked on the techstacks namely React, MFE & Graph-QL.',
      ],
    },
    {
      role: 'Executive IT',
      company: 'Fidelitus Corp',
      duration: 'Jun 2020 - Jun 2021',
      description: [
        'Worked on the Company Login & Registration pages for the company internal Website.',
        'Worked on the techstacks namely React & Angular.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

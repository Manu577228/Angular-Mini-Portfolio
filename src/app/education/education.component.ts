import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'Visvesvaraya Technological University',
      course: 'B.E in Information Science & Engineering',
      duration: '2018',
      score: '5.6 CGPA',
    },
    {
      institute: 'Acharya PU College',
      course: 'PCMCs',
      duration: '2012',
      score: '7.2 CGPA',
    },
    {
      institute: 'Poorna Prajna Education Center',
      course: 'SSLC',
      duration: '2010',
      score: '8.1 CGPA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

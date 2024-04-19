import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Manu Bharadwaj'],
    ['DOB', '07/11/1994'],
    ['Work Exp', '2.9 Years'],
    ['Education', 'B.E (2018)'],
    ['Interests', 'Singing | Playing Guitar | Badminton'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 2.9 years of experience in software industry.',
    'Worked as Software Engineer on various tech-stacks ( MERN, MEAN, JAVA-Springboot, Jenkins, AWS-EC2, Git )',
    'Delivered all product within deadlines. Always eager to learn new technologies.',
    'Currently, working on some personal Projects.',
  ];

  constructor() {}

  ngOnInit(): void {}
}

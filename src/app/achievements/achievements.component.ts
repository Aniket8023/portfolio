import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'Full Stack Java Internship',
      issuer: 'Skills IT, Pune',
      date: 'Dec 2024 - Feb 2025',
      link: 'assets/Certificate/full stack java.pdf'
    },
    {
      title: 'IBM AI & Cloud Internship',
      issuer: 'Edunet Foundation | AICTE | IBM SkillsBuild',
      date: 'Jul - Aug 2024',
      link: 'assets/Certificate/ai & cloud.pdf'
    },
    {
      title: 'Project base learning competition',
      issuer: 'SKNSITS Pune',
      date: 'March 2023',
      link: 'assets/Certificate/PBL.jpg'
    },
    {
      title: 'AI: Transformative Learning with TechSaksham',
      issuer: 'Edunet Foundation (CSR Initiative by Microsoft & SAP)',
      date: 'Jan - Feb 2025',
      link: 'assets/Certificate/techsakham.pdf'
    }
  ];
}

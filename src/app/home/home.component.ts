import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  isFirstVisit: boolean = false;

  ngOnInit(): void {
    const visited = sessionStorage.getItem('visited-home');
    if (!visited) {
      this.isFirstVisit = true;
      sessionStorage.setItem('visited-home', 'true');
    }
  }
}

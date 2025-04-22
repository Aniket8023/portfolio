import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Resume/Aniket.pdf';  // Update path to assets folder
    link.download = 'Aniket.pdf';  // Name of the file when downloading
    link.click();
  }
  
}

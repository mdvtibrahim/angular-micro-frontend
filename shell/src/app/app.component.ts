import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  loading = false;

  constructor(private router: Router) {}

  navigateToProd1() {
    this.loading = true;
    this.router.navigate(['/prod1']).finally(() => {
      this.loading = false;
    });
  }
}

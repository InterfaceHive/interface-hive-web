import { Component } from '@angular/core';

@Component({
  selector: 'app-view-my-requests',
  imports: [],
  templateUrl: './view-my-requests.component.html',
  styleUrl: './view-my-requests.component.css'
})
export class ViewMyRequestsComponent {
   activeStatusTab: string = 'all';

  switchTab(tab: string): void {
    this.activeStatusTab = tab;
  }
}


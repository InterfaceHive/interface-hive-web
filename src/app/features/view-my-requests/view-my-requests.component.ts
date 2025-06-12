import { Component } from '@angular/core';

@Component({
  selector: 'app-view-my-requests',
  imports: [],
  templateUrl: './view-my-requests.component.html',
  styleUrl: './view-my-requests.component.css'
})
export class ViewMyRequestsComponent {
   activeStatusTab: 'all' | 'active' | 'completed' = 'all';

/*   switchTabs(tab: string): void {
    this.activeStatusTab = tab;
  } */

  switchTab(tabId: string) {  
      this.activeStatusTab = tabId as 'all' | 'active' | 'completed';
  }
}


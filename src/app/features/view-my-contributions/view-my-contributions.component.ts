import { Component } from '@angular/core';

@Component({
  selector: 'app-view-my-contributions',
  imports: [],
  templateUrl: './view-my-contributions.component.html',
  styleUrl: './view-my-contributions.component.css'
})
export class ViewMyContributionsComponent {
   activeContributionTab: 'all' | 'Pending' | 'Accepted' | 'UnSelected'= 'all';


  switchTab(tabId: string) {  
      this.activeContributionTab = tabId as 'all' | 'Pending' | 'Accepted' | 'UnSelected';
  }
}
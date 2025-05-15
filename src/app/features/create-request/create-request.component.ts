// interfacehive-request.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interfacehive-request',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent {
  activeCodeTab: 'code-tab' | 'implementation-tab' = 'code-tab';
  activeIOtab: 'input-tab' | 'output-tab' = 'input-tab';
  tags: string[] = ['javascript', 'algorithm', 'sorting'];
  newTag = '';

  switchTab(tabGroup: 'code' | 'io', tabId: string) {
    if (tabGroup === 'code') {
      this.activeCodeTab = tabId as 'code-tab' | 'implementation-tab';
    } else {
      this.activeIOtab = tabId as 'input-tab' | 'output-tab';
    }
  }

  addTag(event: Event) {
    const keyboradEvent = event as KeyboardEvent;
  
    if (keyboradEvent.key === 'Enter' && this.newTag.trim()) {
      event.preventDefault();
      this.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }
}

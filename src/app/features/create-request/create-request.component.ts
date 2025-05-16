// interfacehive-request.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interfacehive-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css'],
  imports: [CommonModule]
})
export class CreateRequestComponent {
  activeCodeTab: 'code-tab' | 'implementation-tab' = 'code-tab';
  activeIOtab: 'input-tab' | 'output-tab' = 'input-tab';
  // tags: string[] = ['javascript', 'algorithm', 'sorting'];
  // newTag = '';

  tags = new FormArray<FormControl<string>>([]);

  // TODO: Make the tags remain the same even with a refresh

  addTag(event: Event, tag: string) {
    event.preventDefault(); //stops the form to be submitted thus stops reloading the page and losing data
    if(tag) {
      this.tags.push(new FormControl(tag, {nonNullable: true}));
    }
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  switchTab(tabGroup: 'code' | 'io', tabId: string) {
    if (tabGroup === 'code') {
      this.activeCodeTab = tabId as 'code-tab' | 'implementation-tab';
    } else {
      this.activeIOtab = tabId as 'input-tab' | 'output-tab';
    }
  }

  // addTag(event: KeyboardEvent) {
  //   if (event.key === 'Enter' && this.newTag.trim()) {
  //     event.preventDefault();
  //     this.tags.push(this.newTag.trim());
  //     this.newTag = '';
  //   }
  // }

  // removeTag(index: number) {
  //   this.tags.splice(index, 1);
  // }
}

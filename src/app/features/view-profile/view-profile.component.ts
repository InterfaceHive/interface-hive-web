import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ViewProfileComponent implements OnInit {
  // TODO : change hard coded data
  profile = {
    id: '1',
    name: 'John Smith',
    username: 'jsDevMaster',
    email: 'js@example.com',
    bio: 'Front-end developer specializing in React, D3, and data visualization. Passionate about creating exceptional user experiences.',
    joinedDate: new Date(),
    contributions: 12,
    requests: 5,
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    socialLinks: {
      github: 'https://github.com/jsdevmaster'
    }
  };
  isLoading = false;

  showModal = false;

  editName = '';
  editUsername = '';
  editBio = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.editName = this.profile.name;
    this.editUsername = this.profile.username;
    this.editBio = this.profile.bio;
  }

  openModal() {
    this.editName = this.profile.name;
    this.editUsername = this.profile.username;
    this.editBio = this.profile.bio;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveChanges() {
    this.profile.name = this.editName;
    this.profile.username = this.editUsername;
    this.profile.bio = this.editBio;
    this.closeModal();
  }
}
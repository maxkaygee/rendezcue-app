import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="activityForm" (ngSubmit)="onSubmit()">
      <input formControlName="name" placeholder="Activity name">
      <select formControlName="category">
        <option value="Local Scene">Local Scene</option>
        <option value="Day Escapes">Day Escapes</option>
        <option value="Grand Adventures">Grand Adventures</option>
      </select>
      <button type="submit" [disabled]="activityForm.invalid">Add Activity</button>
    </form>
  `
})
export class ActivityFormComponent {
  activityForm;

  constructor(private fb: FormBuilder, private activityService: ActivityService) {
    this.activityForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.activityForm.valid) {
      this.activityService.addActivity(this.activityForm.value)
        .then(() => {
          console.log('Activity added successfully');
          this.activityForm.reset();
        })
        .catch(error => console.error('Error adding activity:', error));
    }
  }
}
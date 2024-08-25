import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../services/activity.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Activities</h2>
    <ul>
      <li *ngFor="let activity of activities$ | async">
        {{ activity.name }} - {{ activity.category }}
      </li>
    </ul>
  `
})
export class ActivityListComponent implements OnInit {
  activities$: Observable<any[]>;

  constructor(private activityService: ActivityService) {
    this.activities$ = this.activityService.getActivities();
  }

  ngOnInit(): void {}
}
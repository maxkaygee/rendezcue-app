import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity-list',
  template: `
    <h2>Activities</h2>
    <ul>
      <li *ngFor="let activity of activities$ | async">
        {{ activity.name }} - {{ activity.category }}
      </li>
    </ul>
  `,
  standalone: true
})
export class ActivityListComponent implements OnInit {
  activities$: Observable<any[]>;

  constructor(private firestore: Firestore) {
    const activitiesCollection = collection(this.firestore, 'activities');
    this.activities$ = collectionData(activitiesCollection);
  }

  ngOnInit(): void {
  }
}
import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private firestore: Firestore) {}

  getActivities(): Observable<any[]> {
    const activitiesCollection = collection(this.firestore, 'activities');
    return collectionData(activitiesCollection, { idField: 'id' });
  }

  addActivity(activity: any) {
    const activitiesCollection = collection(this.firestore, 'activities');
    return addDoc(activitiesCollection, activity);
  }
}
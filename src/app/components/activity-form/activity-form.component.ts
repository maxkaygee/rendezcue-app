import { Component } from '@angular/core';
   import { FormBuilder, Validators } from '@angular/forms';
   import { Firestore, addDoc, collection } from '@angular/fire/firestore';

   @Component({
     selector: 'app-activity-form',
     template: `
       <form [formGroup]="activityForm" (ngSubmit)="onSubmit()">
         <input formControlName="name" placeholder="Activity name">
         <select formControlName="category">
           <option value="Local Scene">Local Scene</option>
           <option value="Day Escapes">Day Escapes</option>
           <option value="Grand Adventures">Grand Adventures</option>
         </select>
         <button type="submit">Add Activity</button>
       </form>
     `,
     standalone: true
   })
   export class ActivityFormComponent {
     activityForm = this.fb.group({
       name: ['', Validators.required],
       category: ['', Validators.required]
     });

     constructor(private fb: FormBuilder, private firestore: Firestore) {}

     onSubmit() {
       if (this.activityForm.valid) {
         addDoc(collection(this.firestore, 'activities'), this.activityForm.value);
       }
     }
   }
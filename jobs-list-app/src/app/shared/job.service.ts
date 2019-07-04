import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  formData: Job = new Job();

  constructor(private firestore:AngularFirestore) { }

  addJob(value : Job){
    this.firestore.collection('jobs').add({
      'company': value.company,
      'url': value.url,
      'position': value.position,
      'location': value.location,
      'description': value.description,
      'type': value.type,
      'category': value.category});
  }
}

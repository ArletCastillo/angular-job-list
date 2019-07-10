import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseListObservable } from '@angular/fire/database-deprecated'
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jobs';

  constructor(private _router: Router){
    this._router.navigateByUrl('');
  }
}

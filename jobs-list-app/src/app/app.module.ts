import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobService } from './shared/job.service';
import { PostJobComponent } from './post-job/post-job.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { MatSelectModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'post-job', component: PostJobComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostJobComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatSelectModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }

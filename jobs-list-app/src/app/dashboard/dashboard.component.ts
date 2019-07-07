import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service : JobService) { }

  jobs:any[]

  ngOnInit() {
    this.service.getJobValues().subscribe(list => {
      this.jobs = list.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
      console.log(this.jobs);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job.service';
import { NgForm } from '@angular/forms';
import { Job } from 'src/app/shared/job.model' 
export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  selected = 'programmer-1';
  type:string = 'full-time'; 

  category: Category[] = [
    {value: 'designer-0', viewValue: 'Designer'},
    {value: 'programmer-1', viewValue: 'Programmer'}
  ];

  constructor(private service : JobService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      company : '',
      url : '',
      position : '',
      location : '',
      description : '',
      type : '',
      category: ''
    }
  }
  addJob() {
    var x = <Job>{'company': this.service.formData.company,
    'url': this.service.formData.url,
    'position': this.service.formData.position,
    'location': this.service.formData.location,
    'description': this.service.formData.description,
    'type': this.type,
    'category': this.selected
    };
    
    this.service.addJob(x);
  }
}

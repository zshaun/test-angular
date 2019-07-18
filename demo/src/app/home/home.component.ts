import { Component, OnInit } from '@angular/core';
import data from '../../assets/existing_data.json';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: any;
  rForm: FormGroup;
  name: string = '';
  date: string = '';
  assigned: string = '';

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'date': [null, Validators.required],
      'assigned': [null, Validators.compose([Validators.required, Validators.maxLength(10)])]
    })
  }

  addTask(post) {
    this.tasks.push({
      "name": post.name,
      "date": post.date,
      "assigned": post.assigned
    })
  }

  rmTask(task) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  ngOnInit() {
    this.tasks = data.data
  }
}

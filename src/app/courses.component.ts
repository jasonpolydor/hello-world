import { Component } from '@angular/core';
import { CoursesService } from './courses/courses.service';

@Component({
  selector: 'courses',
  template: `
  <h2>{{ title }}</h2>
  <img [src] = "imgUrl" />
  <table>
      <tr>
          <td [attr.colspan]="colSpan"></td>
      </tr>
  </table>
  <button class="btn btn-primary" 
    [style.background]="isActive?'blue':'red'" 
    [class.active]="isActive" 
    [class.disabled]="isDisabled">Button
  </button>
  <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
  </ul>
  `
})
export class CoursesComponent {
    title = "List of courses";
    isActive = false;
    isDisabled = true;
    imgUrl = "https://dummyimage.com/600x400/000/fff"; //e.g. of one way property binding
    courses;
    colSpan = 2;

    constructor(service: CoursesService){
      this.courses = service.getCourses();
    }
}
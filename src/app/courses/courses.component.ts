import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
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

    onDivClick(){
      console.log("div Clicked");
    }

    onSave($event){
      $event.stopPropagation();
      console.log('clicked', $event);
    }

    // onKeyUp($event){
    //   console.log("Enter was pressed");
    //   console.log($event.target.value);
    // }

    onKeyUp(email){
      console.log(email);
    }
}
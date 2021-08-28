import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styles: [],
})
export class TimetableComponent implements OnInit {
  lectures: Lecture[] = [];

  constructor(private lectureService: LectureService) {}

  ngOnInit() {
    this.getLectures();
  }

  getLectures(): void {
    this.lectureService
      .getLectures()
      .subscribe((lectures) => (this.lectures = lectures));
  }
}

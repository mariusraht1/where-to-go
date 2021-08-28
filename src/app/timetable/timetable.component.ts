import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';
import { LECTURES } from '../shared/mock-lectures';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styles: [],
})
export class TimetableComponent implements OnInit {
  lectures: Lecture[] = [];
  selectedLecture: Lecture | undefined;

  constructor(private lectureService: LectureService) {}

  getLectures(): void {
    this.lectureService
      .getLectures()
      .subscribe((lectures) => (this.lectures = lectures));
  }

  onSelect(lecture: Lecture): void {
    this.selectedLecture = lecture;
  }

  ngOnInit(): void {
    this.getLectures();
  }
}

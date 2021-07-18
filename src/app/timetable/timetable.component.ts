import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LECTURES } from '../shared/mock-lectures';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styles: [],
})
export class TimetableComponent implements OnInit {
  lectures = LECTURES;
  selectedLecture: Lecture | undefined;

  constructor() {}

  onSelect(lecture: Lecture): void {
    this.selectedLecture = lecture;
  }

  ngOnInit(): void {}
}

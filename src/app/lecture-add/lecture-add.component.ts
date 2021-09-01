import { Component, OnInit } from '@angular/core';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lecture-add',
  templateUrl: './lecture-add.component.html',
  styles: [],
})
export class LectureAddComponent implements OnInit {
  lectures: Lecture[] = [];
  fieldsEmpty: boolean = false;

  constructor(
    private lectureService: LectureService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getLectures();
  }

  getLectures(): void {
    this.lectureService
      .getLectures()
      .subscribe((lectures) => (this.lectures = lectures));
  }

  goBack(): void {
    this.location.back();
  }

  add(
    name: string,
    building: string,
    floor: string,
    room: string,
    day: string,
    hours: string,
    minutes: string,
    department?: string
  ): void {
    let hoursInt = parseInt(hours);
    let minutesInt = parseInt(minutes);
    let time = { hours: hoursInt, minutes: minutesInt };
    if (!name || !room || !day || !time || !building || !floor) {
      this.fieldsEmpty = true;
      return;
    }

    this.lectureService
      .addLecture({
        name,
        building,
        floor,
        room,
        day,
        time,
        department,
      } as Lecture)
      .subscribe((lecture) => {
        this.lectures.push(lecture);
        this.goBack();
      });
  }
}

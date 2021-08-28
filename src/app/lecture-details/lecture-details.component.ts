import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecture } from '../shared/lecture';
import { LectureService } from '../shared/lecture.service';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styles: [],
})
export class LectureDetailsComponent implements OnInit {
  @Input() lecture: Lecture | undefined;
  constructor(
    private route: ActivatedRoute,
    private lectureService: LectureService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLecture();
  }

  getLecture(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.lectureService
        .getLecture(parseInt(id))
        .subscribe((lecture) => (this.lecture = lecture));
    }
  }

  goBack(): void {
    this.location.back();
  }
}

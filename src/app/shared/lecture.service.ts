import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lecture } from './lecture';
import { LECTURES } from './mock-lectures';

@Injectable({
  providedIn: 'root',
})
export class LectureService {
  constructor() {}

  getLecture(id: number): Observable<Lecture | undefined> {
    return of(LECTURES.find((lecture) => lecture.id === id));
  }

  getLectures(): Observable<Lecture[]> {
    return of(LECTURES);
  }
}

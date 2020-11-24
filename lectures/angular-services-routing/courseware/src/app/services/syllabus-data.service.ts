import { Injectable } from '@angular/core';

export class Course {
  section: string
  title: string;
  description: string;
  gradingScale: string[];
  calendar: string[];
  bookInfo: string;
  meetingTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class SyllabusDataService {
  private courses: Course[] = {
    section: 'P422',
    title: 'Web Enterprise Systems',
    description: 'Client/Server web technologies',
    gradingScale: [
      '90-100: A',
      '0-89: F',
    ],
    calendar: [
      '1: NodeJS',
      '2: Angular',
      '3: Prototype',
      '4: Proficiency'
    ],
    bookInfo: 'Node.js, Mongo, and Angular Web Development',
    meetingTime: 'Tu/Th 10:00-12:00'
  }

  constructor() { }

  public getCourse(name: string): Course {
    const res = this.courses.find(c => c.section.toLowerCase() === name);
    if (!res) {
      return null;
    }
    return res;
  }
}

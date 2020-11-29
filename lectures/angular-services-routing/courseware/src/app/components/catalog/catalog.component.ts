import { Component, OnInit } from '@angular/core';
import { SyllabusDataService } from 'src/app/services/syllabus-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  courseNames: Observable<string[]>;


  constructor(
    private syllabusDataService: SyllabusDataService
  ) { }

  ngOnInit(): void {
    // requests all courses
    this.courseNames = this.syllabusDataService.getCourseNames();
  }

}

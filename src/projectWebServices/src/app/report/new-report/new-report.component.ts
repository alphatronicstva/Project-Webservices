import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  instructorName="Naam Onbekend"
  constructor() { }

  ngOnInit() {
  }

}

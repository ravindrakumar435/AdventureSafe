import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  public markers: any[];
  public lat: number;
  public lng: number;
  public zoom: number;

  constructor() {
    this.lat = 0;
    this.lng = 0;
    this.zoom = 2;
    this.markers = [];
  }

  ngOnInit() {
    this.markers.push({
      position: {
        lat: 17.7153,
        lng: 83.3242,
      },
      // label: {
      //   color: "black",
      //   text: "Imaginnovate",
      // },
    });
  }
}

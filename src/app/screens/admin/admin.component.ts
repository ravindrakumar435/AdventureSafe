import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [
    'Punctuality',
    'Communication',
    'Problem Solving',
    'Team Player',
    'Coding',
    'Technical Knowledge',
    'Meeting Deadlines',
  ];
  // public pieChartColors: Array<any> = [
  //   {
  //     backgroundColor: "#1a4ea1",
  //     borderColor: "#1a4ea1",
  //   },
  //   {
  //     backgroundColor: "#e8e5d4",
  //     borderColor: "#e8e5d4)",
  //   },
  //   {
  //     backgroundColor: "#faaf41",
  //     borderColor: "#faaf41",
  //   },
  // ];
  public pieChartData: SingleDataSet = [360, 60, 200, 100, 80, 40];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {}
}

import {Component, ElementRef, NgZone, OnInit} from '@angular/core';
import {
  D3Service,
  D3,
  Selection
} from 'd3-ng2-service';
import {DemoD3ChartsService} from './demo-d3-charts.service';
import {DemoD3ChartsModel} from './demo-d3-charts-model';

@Component({
  selector: 'spia-demo-d3-charts',
  templateUrl: './demo-d3-charts.component.html',
  styleUrls: ['./demo-d3-charts.component.scss']
})
export class DemoD3ChartsComponent implements OnInit {
  /*Model */
  title = 'Sample Dialog';
  buttonLabel = 'Launch PopUp';
  cancelButtonLabel = 'Cancel';
  actionButtonLabel = 'Save';
  data: object = {'name': 'Sample Dialog'};
  /*End*/
  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service, private _svc: DemoD3ChartsService) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;

  }

  /*Model */
  confirm(e) {
    alert('closed' + JSON.stringify(e));
  }
  /*Model End */

  ngOnInit() {
    this._svc.getChartData().subscribe((res: DemoD3ChartsModel[]) => {
      this.drawChart(res);
    });
  }

  drawChart(chartData: DemoD3ChartsModel[]) {
    const self = this;
    const d3 = this.d3;
    let svg: any;
    let colors: any = [];

    const padding: number = 25;
    const width: number = 500;
    const height: number = 150;
    let xScale: any;
    let yScale: any;
    let xAxis: any;
    let yAxis: any;
    const data: DemoD3ChartsModel[] = chartData;

    if (this.parentNativeElement !== null) {
      svg = d3.select(this.parentNativeElement)
        .append('svg')        // create an <svg> element
        .attr('width', width) // set its dimensions
        .attr('height', height);

      colors = ['red', 'yellow', 'green', 'blue'];

      xScale = d3.scaleBand()
        .domain(data.map(function (d) {
          return d.name;
        }))
        .range([0, 200]);

      yScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) {
          return d.yVal;
        })])
        .range([100, 0]);

      xAxis = d3.axisBottom(xScale) // d3.js v.4
        .ticks(5)
        .scale(xScale);

      yAxis = d3.axisLeft(xScale) // d3.js v.4
        .scale(yScale)
        .ticks(7);

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + (padding) + ',' + padding + ')')
        .call(yAxis);

      svg.append('g')            // create a <g> element
        .attr('class', 'axis')   // specify classes
        .attr('transform', 'translate(' + padding + ',' + (height - padding) + ')')
        .call(xAxis);            // let the axis do its thing

      const rects = svg.selectAll('rect')
        .data(data);
      rects.size();

      const newRects = rects.enter();

      newRects.append('rect')
        .attr('x', function (d, i) {
          return xScale(d.name);
        })
        .attr('y', function (d) {
          return yScale(d.yVal);
        })
        .attr('transform', 'translate(' + (padding - 5 + 25) + ',' + (padding - 5) + ')')
        .attr('height', function (d) {
          return height - yScale(d.yVal) - (2 * padding) + 5;
        })
        .attr('width', 10)
        .attr('fill', function (d, i) {
          return colors[i];
        });
    }
  }
}

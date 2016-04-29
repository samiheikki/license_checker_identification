import {Component} from 'angular2/core';
import {VaadinCharts, DataSeries} from '../../bower_components/vaadin-charts/directives/vaadin-charts.js'

@Component({
    selector: 'my-app',
    template: `
    <vaadin-area-chart>
          <title>Fibonacci</title>
          <x-axis><title>Index</title></x-axis>
          <y-axis><title>Value</title></y-axis>
          <data-series>
            <data>1, 1, 2, 3, 5, 8, 13, 21, 34</data>
          </data-series>
        </vaadin-area-chart>
    `,
    directives: [VaadinCharts, DataSeries]
})
export class AppComponent { }

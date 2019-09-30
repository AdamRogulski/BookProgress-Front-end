import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { ActivatedRoute } from '@angular/router';
import { Series } from 'src/app/models/series';

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.css']
})
export class SeriesInfoComponent implements OnInit {

  series: Series;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.seriesService.getOneSeries(params.get('id')).subscribe( data => {
        this.series = data; });
    });
  }

  deleteSeries() {
    if (confirm('Czy na pewno chcesz usnunąć tą serie?')) {
    this.route.paramMap.subscribe( params => {
      this.seriesService.deleteSeries(params.get('id')).subscribe( data => {
        alert(data); });
    }); }
  }

}

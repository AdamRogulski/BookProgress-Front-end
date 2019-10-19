import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  stats: Array<any>;

  constructor(private statistics: StatsService) { }

  ngOnInit() {
    this.statistics.getStats().subscribe( data =>
      this.stats = data);
  }

}

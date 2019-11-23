import { Component, OnInit } from '@angular/core';
import { SpinnerServiceService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public spinnerService: SpinnerServiceService) { }

  ngOnInit() {
  }

}

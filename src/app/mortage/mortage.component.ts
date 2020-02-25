import { Component, OnInit } from '@angular/core';
import { InterestService } from '../Services/interest.service';

@Component({
  selector: 'app-mortage',
  templateUrl: './mortage.component.html',
  styleUrls: ['./mortage.component.css']
})
export class MortageComponent implements OnInit {

  constructor(private service:InterestService) { }

  Total: number; 
  years: number;
calculateinterest(): void { 
  this.Total = this.service.calculateinterest(this.years);
}

  ngOnInit(): void {
  }

}

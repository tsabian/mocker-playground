import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mocker-route-detail',
  templateUrl: './mocker-route-detail.component.html',
  styleUrls: ['./mocker-route-detail.component.scss']
})
export class MockerRouteDetailComponent implements OnInit {

  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {

  }
}

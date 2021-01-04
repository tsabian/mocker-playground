import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MockerRoute } from 'src/app/models/mocker-route';
import { MockRoutesService } from 'src/app/services/mock-routes.service';
import { environment } from 'src/environments/environment';

import { faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mockerRoutes: MockerRoute[];
  mockerURL = environment.mockerURL;

  faUnlock = faUnlock;

  constructor(private mockerService: MockRoutesService, private router: Router) {
    this.mockerRoutes = [];
  }

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.mockerService.getAllRoutes().subscribe(routes => {
      if (routes) {
        this.mockerRoutes = routes;
      }
    });
  }

  goToDetails(route: MockerRoute) {
    this.router.navigate(['detail']);
  }

  goToDelete(id: string) {
    console.log(id);
  }

  execute(id: string) {
    console.log(id);
  }

}

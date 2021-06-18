import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MockerRoute } from 'src/app/models/mocker-route';
import { MockRoutesService } from 'src/app/services/mock-routes.service';
import { environment } from 'src/environments/environment';

import { faTintSlash, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { stringify } from 'querystring';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mockerRoutes: MockerRoute[];
  mockerURL = environment.mockerURL;
  testHeader?: string;
  testResult: any;
  testStatus?: number;
  faUnlock = faUnlock;

  constructor(private mockerService: MockRoutesService, private router: Router, private route: ActivatedRoute) {
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

  goToDetails(routeId: string): void {
    this.router.navigate(['/detail/', { id: routeId }]);
  }

  goToDelete(id: string): void {
    console.log(id);
  }

  execute(id: string): void {
    const selected = this.mockerRoutes.find((value) => value._id === id);
    if (selected) {
      let path = selected.context && selected.context.length > 0 ? `/${selected.context[0]}${selected.path}` : selected.path;
      this.mockerService.execute(selected.method, path).subscribe(obj => {
        if (obj && obj.body) {
          this.testHeader = selected.name;
          this.testStatus = obj.status;
          this.testResult = JSON.stringify(obj.body);
        } else {
          this.testResult = 'Result is empty';
        }
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  route: ActivatedRoute | null | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  relativeRoute() {
    this.router.navigate(['first-component'], { relativeTo: this.route });
  }

}

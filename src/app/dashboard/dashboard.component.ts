import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userIdParam: any;
  userDetails: JSON;


  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) {
    this.route.params.subscribe(params => this.fetchparam(params));
    this.userDetails = this.firebaseService.getUserById(this.userIdParam.id);
  }

  fetchparam(param: any) {
    this.userIdParam = param;
    console.log(this.userIdParam);
  }

  ngOnInit() {
  }

}

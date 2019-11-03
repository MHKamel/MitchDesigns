import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MitchService } from '../service/mitch.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {
model: any;
  constructor(private mitchService: MitchService, private route: ActivatedRoute, private location: Location) {
    this.route.params.subscribe( params => {
    this.mitchService.getDataDetail(params. id).subscribe(data => {
      this.model =  data;
    });
    });
}

  ngOnInit() {
  }
  backClicked() {
    this.location.back();
  }
}

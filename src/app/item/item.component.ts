import { Component, OnInit } from '@angular/core';
import { MitchService } from '../service/mitch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  mitchdesigns: any[] = [] ;
  constructor(private mitchService: MitchService, private router: Router) {

  }

  ngOnInit() {
   // this.mitchdesigns = this.mitchService.mitchdesigns;
    this.mitchService.getData().subscribe(data => {
      console.log('data Compound', data );
      this.mitchdesigns = data;
    });
  }

  onclickitem(id: number) {
    this.router.navigate(['item', id]);
  }
}

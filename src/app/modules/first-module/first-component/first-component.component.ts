import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import * as dayjs from 'dayjs';
declare var $;

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html'
})
export class FirstComponentComponent implements OnInit {

  img: string;

  constructor() { }

  ngOnInit() {
    this.img = environment.assets.img.logo;
  }

}

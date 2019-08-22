import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InnerComponent } from '../inner/inner.component';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {

  control: FormControl = new FormControl('initState', [
    Validators.required,
    Validators.maxLength(5)
  ]);

  constructor() { 

    this.control.valueChanges.subscribe(v => console.debug(v));

  }

  ngOnInit(): void {
  }

}

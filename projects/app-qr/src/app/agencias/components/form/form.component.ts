import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = ''

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'qr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onToggleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>()
  url=""
  expanded=true

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded()
  {
    this.expanded = !this.expanded
    this.onToggleExpanded.emit(this.expanded)
  }

}

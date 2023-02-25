import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isVisible: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public toggleNav(): void {
    this.isVisible = !this.isVisible;
  }
}

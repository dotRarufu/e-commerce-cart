import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {
  @Input() profile: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleClick(id: string) {
    this.router.navigateByUrl(`/home/info/${id}`);
  }
}

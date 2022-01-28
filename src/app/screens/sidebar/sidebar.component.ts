import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/services/authservice/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  toggle: Boolean = false;
  profilename: any;
  adminName: any;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit(): void {}
  profileToggle(profile: any) {
    this.profilename = profile;
    console.log(profile, 'pro');

    this.toggle = !this.toggle;
    this.messageEvent.emit(profile);
  }
  menuToggle(admin: any) {
    this.adminName = admin;
    console.log(this.adminName, ' this.adminName');

    this.toggle = !this.toggle;
    this.messageEvent.emit(admin);
  }
  clearToggle() {}
}

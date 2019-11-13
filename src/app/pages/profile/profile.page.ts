import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	user = JSON.parse(sessionStorage.getItem('session'));
  constructor() { }

  ngOnInit() {
		console.log(this.user)
  }

}

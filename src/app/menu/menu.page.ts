import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.page.html',
	styleUrls: ['./menu.page.scss'],
})

export class MenuPage {

	menu = [
		{
			icon: "home",
			url: "/menu/home",
			text: "Users"
		},
		{
			icon: "home",
			url: "/menu/home",
			text: "Clients"
		},
		{
			icon: "home",
			url: "/menu/home",
			text: "Services"
		},
		{
			icon: "home",
			url: "/menu/home",
			text: "Invoice"
		}
	]

	account = [
		{
			icon: "person",
			url: "/menu/profile",
			text: "Profile"
		},
		{
			icon: "exit",
			url: "/login",
			text: "Logout"
		},
	]


}

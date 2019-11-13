import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ModalController } from '@ionic/angular';
import { CreateUserModalPage } from 'src/app/components/create-user-modal/create-user-modal.page';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
	user = JSON.parse(sessionStorage.getItem('session'))
	user_list;

	constructor(
		private user_service: UserService,
		private modal: ModalController,) {}

	ngOnInit() {
		this.user_service.list().subscribe(response => {
			this.user_list = response;
		}, e => {
			console.log(e.error);
		});
	}

	async create() {
		const modal = await this.modal.create({
			component: CreateUserModalPage
		});

		return await modal.present();
	}

}

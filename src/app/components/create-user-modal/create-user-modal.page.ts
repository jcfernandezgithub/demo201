import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.page.html',
  styleUrls: ['./create-user-modal.page.scss'],
})
export class CreateUserModalPage implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

	dismiss() {
		return this.modal.dismiss();
	}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CreateUserModalPage } from 'src/app/components/create-user-modal/create-user-modal.page';
import { CreateUserModalPageModule } from 'src/app/components/create-user-modal/create-user-modal.module';

@NgModule({
	entryComponents: [
		CreateUserModalPage
	],
  imports: [
    CommonModule,
    FormsModule,
		IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
		]),
		CreateUserModalPageModule,	
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

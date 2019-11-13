import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
	{
		path: 'menu',
		component: MenuPage,
		children: [
			{
				path: 'home',
				loadChildren: '../pages/home/home.module#HomePageModule'
			},
			{
				path: 'list',
				loadChildren: () => import('../pages/list/list.module').then(m => m.ListPageModule)
			},
			{
				path: 'profile',
				loadChildren: '../pages/profile/profile.module#ProfilePageModule'
			}
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [MenuPage]
})
export class MenuPageModule { }

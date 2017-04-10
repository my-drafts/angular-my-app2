import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent }  from './components/test.component';
import { AboutComponent }  from './components/about.component';

const appRoutes: Routes = [
	{
		path: '',
		component: TestComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
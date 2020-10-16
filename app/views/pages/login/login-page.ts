import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { LoginViewModel } from '~/shared/view-models/login/login.page.vm';

let loginVm: LoginViewModel = null;

export function onLogingTap() {
	loginVm
		.onLoginTapHandler()
		.then(() => {
			// go to backlog page
		})
		.catch(() => {
			console.log('could not log you in at this time');
		});
}

export function onGotoRegisterTap() {
	//
}

export function onNavigatingTo(args: NavigatedData) {
	const page = <Page>args.object;
	loginVm = new LoginViewModel();
	page.bindingContext = loginVm;
	//
}

import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { LoginViewModel } from '~/shared/view-models/pages/login/login.page.vm';
import { goToRegisterPage } from '~/shared/helpers/navigation/nav.helper';

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
	goToRegisterPage();
}

export function onNavigatingTo(args: NavigatedData) {
	const page = <Page>args.object;
	loginVm = new LoginViewModel();
	page.bindingContext = loginVm;
}

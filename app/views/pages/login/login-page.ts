import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { LoginViewModel } from '~/shared/view-models/pages/login/login.page.vm';
import {
	goToBacklogPage,
	goToRegisterPage,
} from '~/shared/helpers/navigation/nav.helper';

let loginVm: LoginViewModel = null;

export function onLoginTap() {
	// Let the VM know about login action
	loginVm
		.onLoginTapHandler()
		.then(() => {
			goToBacklogPage(true);
		})
		.catch((error) => {
			console.error(error);
			alert('Sorry, could not log in at this time');
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

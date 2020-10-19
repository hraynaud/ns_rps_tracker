import { Frame } from '@nativescript/core/ui/frame';
import { NavigationEntry } from '@nativescript/core/ui/frame';
import { topmost } from '@nativescript/core/ui/frame/frame-common';
import { Label } from '@nativescript/core/ui/label';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { Page } from '@nativescript/core/ui/page';
import { ROUTES } from './routes';

export function navigate(
	pageModuleNameOrNavEntry: string | NavigationEntry,
	otherFrame?: Frame
) {
	const navFrame = otherFrame ? otherFrame : topmost();
	if (typeof pageModuleNameOrNavEntry === 'object') {
		navFrame.navigate(pageModuleNameOrNavEntry);
	} else if (typeof pageModuleNameOrNavEntry === 'string') {
		navFrame.navigate(pageModuleNameOrNavEntry);
	}
}

export function goToLoginPage(animated?: boolean) {
	const navEntry: NavigationEntry = {
		moduleName: ROUTES.loginPage,
		clearHistory: true,
		animated: animated,
	};
	navigate(navEntry);
}

export function goToRegisterPage() {
	const navEntry: NavigationEntry = {
		moduleName: ROUTES.registerPage,
		clearHistory: true,
		animated: false,
	};
	navigate(navEntry);
}

export function goToBacklogPage(clearHistory?: boolean) {
	const navEntry: NavigationEntry = {
		moduleName: ROUTES.backlogPage,
		clearHistory: clearHistory,
	};
	navigate(navEntry);
}

export function goToDetailPage<T>(context: T, clearHistory?: boolean) {
	const navEntry: NavigationEntry = {
		moduleName: ROUTES.detailPage,
		clearHistory: clearHistory,
		context: context,
	};
	navigate(navEntry);
}

export function goToSettingsPage() {
	const navEntry: NavigationEntry = {
		create: () => {
			const stack = new StackLayout();
			const label = new Label();
			label.text = 'Settings Page';

			stack.addChild(label);

			const page = new Page();
			page.content = stack;
			return page;
		},
	};
	navigate(navEntry);
}

export function goBack() {
	topmost().goBack();
}

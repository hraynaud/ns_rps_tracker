import { BacklogViewModel } from '~/shared/view-models/pages/backlog/backlog.page.vm';
import {
	NavigatedData,
	Page,
	EventData,
	ItemEventData,
} from '@nativescript/core';
import { PtItem } from '~/core/models/domain/pt-item.model';
import {
	goToDetailPage,
	goToLoginPage,
	goToSettingsPage,
} from '~/shared/helpers/navigation/nav.helper';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

const backlogVm: BacklogViewModel = new BacklogViewModel();
let drawer: RadSideDrawer = null;

export function onNavigatingTo(args: NavigatedData) {
	const page = <Page>args.object;
	page.bindingContext = backlogVm;
	drawer = page.getViewById('sideDrawer');
}

export function toggleDrawer() {
	drawer.toggleDrawerState();
}

export function onLoaded(args: EventData) {
	backlogVm.refresh();
}
export function onListItemTap(args: ItemEventData) {
	const item = <PtItem>args.view.bindingContext;
	goToDetailPage<PtItem>(item);
}

export function onLogoutTap() {
	backlogVm.onLogoutTapHandler().then(() => goToLoginPage(true));
}

export function onSettingsTap() {
	goToSettingsPage();
}

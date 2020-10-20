import { EventData, NavigatedData, Page, View } from '@nativescript/core';
import { PtItem } from '~/core/models/domain/pt-item.model';

import { DetailViewModel } from '~/shared/view-models/pages/detail/detail.page.vm';

let detailsVm: DetailViewModel;

export function onNavigatingTo(args: NavigatedData) {
	const page = <Page>args.object;
	const currentItem = <PtItem>page.navigationContext;
	detailsVm = new DetailViewModel(currentItem);
	page.bindingContext = detailsVm;
}

export function onAssigneeRowTap(args: EventData) {
	const view = <View>args.object;
}

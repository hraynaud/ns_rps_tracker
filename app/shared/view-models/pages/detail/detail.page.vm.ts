import { Observable } from '@nativescript/core/data/observable';
import { ItemType } from '~/core/constants/pt-item-types';

import { PtItem, PtUser } from '~/core/models/domain';
import { PriorityEnum } from '~/core/models/domain/enums';
import { PtItemType } from '~/core/models/domain/types';

import { DetailScreenType } from '~/core/models/types';

import {
	getAuthService,
	getBacklogService,
} from '~/globals/dependencies/locator';
import { PtAuthService, PtBacklogService } from '~/core/contracts/services';
import { toDeleteItemRequest } from '~/core/contracts/requests/backlog/delete-item.request';
import { goBack } from '~/shared/helpers/navigation/nav.helper';

export class DetailViewModel extends Observable {
	private authService: PtAuthService;
	private backlogService: PtBacklogService;

	public apiEndpoint: String;
	public selectedScreen: DetailScreenType = 'details';
	private selectedAssignee: PtUser;
	public itemTitle: string;

	/* details form */
	public selectedTypeValue: PtItemType;
	public selectedPriorityValue: PriorityEnum;
	public itemTypeImage;
	/* details form END */

	constructor(private ptItem: PtItem) {
		super();

		this.authService = getAuthService();
		this.backlogService = getBacklogService();

		this.itemTitle = ptItem.title;
		this.selectedAssignee = ptItem.assignee;
		this.apiEndpoint = this.backlogService.getApiEndpoint();
	}

	public onTabDetailsTap() {
		// this.set('selectedScreen', 'details');
		this.selectedScreen = 'details';
	}

	public onTabTasksTap() {
		// this.set('selectedScreen', 'tasks');
		this.selectedScreen = 'tasks';
	}

	public onTabChitchatTap() {
		// this.set('selectedScreen', 'chitchat');
		this.selectedScreen = 'chitchat';
	}

	/* details START */
	public updateSelectedTypeValue(selTypeValue: PtItemType) {
		this.set('selectedTypeValue', selTypeValue);
		this.set(
			'itemTypeImage',
			ItemType.imageResFromType(this.selectedTypeValue)
		);
	}

	public deleteRequested() {
		const deleteItemRequest = toDeleteItemRequest(this.ptItem);
		this.backlogService
			.deletePtItem(deleteItemRequest)
			.then(() => {
				goBack();
			})
			.catch(() => {
				console.log('some error occured');
				goBack();
			});
	}
	/* details END */
}

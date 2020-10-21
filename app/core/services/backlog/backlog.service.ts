import { PtBacklogService } from '~/core/contracts/services/pt-backlog-service.contract';
import {
	DeleteItemResponse,
	FetchItemsResponse,
} from '~/core/contracts/responses/backlog';
import { PtItem } from '~/core/models/domain';
import { PtLoggingService, PtAppStateService } from '~/core/contracts/services';
import { PtBacklogRepository } from '~/core/contracts/repositories';
import {
	DeleteItemRequest,
	FetchItemsRequest,
} from '~/core/contracts/requests/backlog';

export class BacklogService implements PtBacklogService {
	constructor(
		private loggingService: PtLoggingService,
		private backlogRepo: PtBacklogRepository,
		private appStateService: PtAppStateService
	) {}

	public getApiEndpoint(): String {
		return this.backlogRepo.apiEndpoint;
	}

	public fetchItems(
		fetchItemsRequest: FetchItemsRequest
	): Promise<FetchItemsResponse> {
		return new Promise<FetchItemsResponse>((resolve, reject) => {
			this.backlogRepo.fetchPtItems(
				fetchItemsRequest.currentUserId,
				(error) => {
					this.loggingService.error('Fetch items failed');
					reject(error);
				},
				(ptItems: PtItem[]) => {
					this.appStateService.setStateItem('backlogItems', ptItems);

					const response: FetchItemsResponse = {
						items: ptItems,
					};
					resolve(response);
				}
			);
		});
	}
	public deletePtItem(
		deleteItemRequest: DeleteItemRequest
	): Promise<DeleteItemResponse> {
		return new Promise<DeleteItemResponse>((resolve, reject) => {
			this.backlogRepo.deletePtItem(
				deleteItemRequest.itemToDelete.id,
				(error) => {
					this.loggingService.error('Deleting item failed');
					reject(error);
				},
				() => {
					const backlogItems = this.appStateService.getStateItem(
						'backlogItems'
					);
					const updatedItems = backlogItems.filter((i) => {
						return i.id !== deleteItemRequest.itemToDelete.id;
					});
					this.appStateService.setStateItem('backlogItems', updatedItems);

					const response: DeleteItemResponse = {
						deleted: true,
					};

					resolve(response);
				}
			);
		});
	}
}

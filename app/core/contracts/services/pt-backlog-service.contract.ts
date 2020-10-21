import {
	DeleteItemResponse,
	FetchItemsResponse,
} from '~/core/contracts/responses/backlog';
import {
	DeleteItemRequest,
	FetchItemsRequest,
} from '~/core/contracts/requests/backlog';

export interface PtBacklogService {
	getApiEndpoint(): String;
	fetchItems(fetchItemsRequest: FetchItemsRequest): Promise<FetchItemsResponse>;

	deletePtItem(
		deleteItemRequest: DeleteItemRequest
	): Promise<DeleteItemResponse>;
}

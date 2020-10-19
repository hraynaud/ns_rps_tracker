import { FetchItemsResponse } from '~/core/contracts/responses/backlog';
import { FetchItemsRequest } from '~/core/contracts/requests/backlog';

export interface PtBacklogService {
	getApiEndpoint(): String;
	fetchItems(fetchItemsRequest: FetchItemsRequest): Promise<FetchItemsResponse>;
}

import {
	DeleteItemResponse,
	FetchItemsResponse,
} from '~/core/contracts/responses/backlog';
import {
	DeleteItemRequest,
	FetchItemsRequest,
} from '~/core/contracts/requests/backlog';
import { PresetType } from '~/core/models/types';

export interface PtBacklogService {
	getCurrentPreset(): PresetType;
	setPreset(preset: PresetType): Promise<void>;
	getApiEndpoint(): String;
	fetchItems(fetchItemsRequest: FetchItemsRequest): Promise<FetchItemsResponse>;

	deletePtItem(
		deleteItemRequest: DeleteItemRequest
	): Promise<DeleteItemResponse>;
}

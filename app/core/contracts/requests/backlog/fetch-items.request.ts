import { PresetType } from '~/core/models/types/presets';

export interface FetchItemsRequest {
	currentPreset: PresetType;
	currentUserId: number;
}

export function toFetchItemsRequest(
	currentPreset: PresetType,
	currentUserId: number
): FetchItemsRequest {
	return {
		currentPreset,
		currentUserId,
	};
}

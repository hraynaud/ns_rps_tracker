export enum LoggingLevelEnum {
	Log = 'Log',
	Warning = 'Warning',
	Debug = 'Debug',
	Error = 'Error',
}

export interface AppConfig {
	apiEndpoint: string;
	loggingEnabled: boolean;
	loggingLevel: LoggingLevelEnum;
}

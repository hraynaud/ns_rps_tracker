// import { Application } from '@nativescript/core';
import * as app from '@nativescript/core/application';
import { ApplicationEventData } from '@nativescript/core/application/application-interfaces';
import { AppConfig } from '~/core/models/config/app.config.model';

export const setAppEvents = () => {
	app.on(app.launchEvent, (args: app.ApplicationEventData) => {
		console.log(args.eventName);
	});
};

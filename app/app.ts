import { Application } from '@nativescript/core';
import { appConfig } from '~/config/app.config';

console.log(`apiEndpoint${appConfig.apiEndpoint}`);

const isLoggedIn = false;

if (isLoggedIn) {
	Application.run({ moduleName: 'app-root-authenticated' });
} else {
	Application.run({ moduleName: 'app-root-anonymous' });
}

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

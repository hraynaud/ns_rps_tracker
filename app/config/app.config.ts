import { AppConfig } from '~/core/models/config/app.config.model';

type ProjEnv = 'Dev' | 'Prod';

const env: ProjEnv = 'Dev';
export let appConfig: AppConfig = null;

if (env === 'Dev') {
	appConfig = require('~/config/app.config.dev.json');
} else {
	appConfig = require('~/config/app.config.prod.json');
}

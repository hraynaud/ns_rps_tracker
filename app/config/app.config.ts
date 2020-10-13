import { AppConfig } from '~/core/models/config/app.config.model';

const envName = global.TNS_ENV;

export let appConfig: AppConfig = require(`./app.config.${envName}.json`);

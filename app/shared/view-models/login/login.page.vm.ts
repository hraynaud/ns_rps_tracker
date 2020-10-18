import { Observable } from '@nativescript/core/data/observable';
import { PtLoginModel } from '~/core/models/domain/pt-login.model';
import { PtAuthService } from '~/core/contracts/services/pt-auth-service.contract';
import { getAuthService } from '~/globals/dependencies/locator';
import { ObservableProperty } from '~/shared/observable-property-decorator';

export class LoginViewModel extends Observable {
	private authService: PtAuthService;
	public email = 'herby@blase.com';
	public password = '';

	@ObservableProperty() public loggingIn = false;

	constructor() {
		super();
		this.authService = getAuthService();
	}

	public onLoginTapHandler() {
		const loginModel: PtLoginModel = {
			username: this.email,
			password: this.password,
		};

		this.loggingIn = true;
		return new Promise((resolve, reject) => {
			this.authService
				.login(loginModel)
				.then(() => {
					this.loggingIn = false;
					resolve();
				})
				.catch((err) => {
					this.loggingIn = false;
					reject();
				});
		});
	}
}

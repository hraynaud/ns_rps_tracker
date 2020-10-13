import * as app from '@nativescript/core/application';

class MyDelegate extends UIResponder implements UIApplicationDelegate {
	public static ObjCProtocols = [UIApplicationDelegate];
	applicationWillFinishLaunchingWithOptions(
		_application: UIApplication,
		_launchOptions: NSDictionary<any, any>
	): boolean {
		return true;
	}
}

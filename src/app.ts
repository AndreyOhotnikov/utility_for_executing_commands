import { DirExecuter } from "./command/dir/dir.executor";
import { ConsoleLogger } from "./out/console-logger/console.logger";

export class App {
	async run() {
		new DirExecuter(ConsoleLogger.getInstance()).excute();
	}
}

const app = new App();
app.run();

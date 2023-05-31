import { PromptService } from "./core/index";

export class App {
	async run() {
    console.log('init class App')
    const res = new PromptService().input<number>('число', 'number')
    console.log(res)
	}
}

const app = new App();
app.run();

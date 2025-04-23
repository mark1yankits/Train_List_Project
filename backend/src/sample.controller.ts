import { Controller, Post } from '@nestjs/common';

@Controller()
export class SampleController {
	@Post()
	handlePostRequest() {
		return { message: 'POST request was successful!' };
	}
}

import { Controller } from "@nestjs/common";
import {
	type HealthServiceApi,
	HealthServiceDefinition,
} from "@tsm-example/api";
import {
	getDecorator,
	type ServiceControllerInterface,
} from "../genericTypes/controller";

const VERSION = "1.0.0.";

@Controller(HealthServiceDefinition.controller)
export class HealthController
	implements ServiceControllerInterface<HealthServiceApi>
{
	@getDecorator(HealthServiceDefinition.endpoints.ready)
	public ready() {
		return { status: `ok - ${VERSION}` };
	}
}

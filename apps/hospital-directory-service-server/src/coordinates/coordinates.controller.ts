import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CoordinatesService } from "./coordinates.service";
import { CoordinatesControllerBase } from "./base/coordinates.controller.base";

@swagger.ApiTags("coordinates")
@common.Controller("coordinates")
export class CoordinatesController extends CoordinatesControllerBase {
  constructor(protected readonly service: CoordinatesService) {
    super(service);
  }
}

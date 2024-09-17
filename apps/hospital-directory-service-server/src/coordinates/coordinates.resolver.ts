import * as graphql from "@nestjs/graphql";
import { CoordinatesResolverBase } from "./base/coordinates.resolver.base";
import { Coordinates } from "./base/Coordinates";
import { CoordinatesService } from "./coordinates.service";

@graphql.Resolver(() => Coordinates)
export class CoordinatesResolver extends CoordinatesResolverBase {
  constructor(protected readonly service: CoordinatesService) {
    super(service);
  }
}

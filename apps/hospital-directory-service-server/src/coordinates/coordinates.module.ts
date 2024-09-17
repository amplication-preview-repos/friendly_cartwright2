import { Module } from "@nestjs/common";
import { CoordinatesModuleBase } from "./base/coordinates.module.base";
import { CoordinatesService } from "./coordinates.service";
import { CoordinatesController } from "./coordinates.controller";
import { CoordinatesResolver } from "./coordinates.resolver";

@Module({
  imports: [CoordinatesModuleBase],
  controllers: [CoordinatesController],
  providers: [CoordinatesService, CoordinatesResolver],
  exports: [CoordinatesService],
})
export class CoordinatesModule {}

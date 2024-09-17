import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoordinatesServiceBase } from "./base/coordinates.service.base";

@Injectable()
export class CoordinatesService extends CoordinatesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

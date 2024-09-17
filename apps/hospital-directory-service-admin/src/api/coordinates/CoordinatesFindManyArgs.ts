import { CoordinatesWhereInput } from "./CoordinatesWhereInput";
import { CoordinatesOrderByInput } from "./CoordinatesOrderByInput";

export type CoordinatesFindManyArgs = {
  where?: CoordinatesWhereInput;
  orderBy?: Array<CoordinatesOrderByInput>;
  skip?: number;
  take?: number;
};

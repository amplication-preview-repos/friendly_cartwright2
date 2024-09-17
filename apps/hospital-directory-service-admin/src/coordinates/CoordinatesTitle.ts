import { Coordinates as TCoordinates } from "../api/coordinates/Coordinates";

export const COORDINATES_TITLE_FIELD = "id";

export const CoordinatesTitle = (record: TCoordinates): string => {
  return record.id?.toString() || String(record.id);
};

import { SortOrder } from "../../util/SortOrder";

export type CoordinatesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  updatedAt?: SortOrder;
};
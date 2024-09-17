import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  hospitalId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};

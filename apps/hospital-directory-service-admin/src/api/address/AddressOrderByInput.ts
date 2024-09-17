import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  line1?: SortOrder;
  line2?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zipcode?: SortOrder;
};

import { HospitalCreateNestedManyWithoutAddressesInput } from "./HospitalCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  city?: string | null;
  country?: string | null;
  hospitals?: HospitalCreateNestedManyWithoutAddressesInput;
  line1?: string | null;
  line2?: string | null;
  state?: string | null;
  zipcode?: string | null;
};

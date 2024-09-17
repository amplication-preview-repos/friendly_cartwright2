import { HospitalUpdateManyWithoutAddressesInput } from "./HospitalUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  country?: string | null;
  hospitals?: HospitalUpdateManyWithoutAddressesInput;
  line1?: string | null;
  line2?: string | null;
  state?: string | null;
  zipcode?: string | null;
};

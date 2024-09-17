import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ReviewUpdateManyWithoutHospitalsInput } from "./ReviewUpdateManyWithoutHospitalsInput";

export type HospitalUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  reviews?: ReviewUpdateManyWithoutHospitalsInput;
};

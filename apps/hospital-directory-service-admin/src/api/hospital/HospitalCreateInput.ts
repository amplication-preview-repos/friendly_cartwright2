import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ReviewCreateNestedManyWithoutHospitalsInput } from "./ReviewCreateNestedManyWithoutHospitalsInput";

export type HospitalCreateInput = {
  address?: AddressWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  reviews?: ReviewCreateNestedManyWithoutHospitalsInput;
};

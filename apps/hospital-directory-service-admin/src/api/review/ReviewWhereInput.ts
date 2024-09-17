import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  comments?: StringNullableFilter;
  hospital?: HospitalWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
};

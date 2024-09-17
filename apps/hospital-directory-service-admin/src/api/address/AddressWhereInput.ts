import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HospitalListRelationFilter } from "../hospital/HospitalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  hospitals?: HospitalListRelationFilter;
  id?: StringFilter;
  line1?: StringNullableFilter;
  line2?: StringNullableFilter;
  state?: StringNullableFilter;
  zipcode?: StringNullableFilter;
};

import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";

export type ReviewUpdateInput = {
  comments?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  rating?: number | null;
};

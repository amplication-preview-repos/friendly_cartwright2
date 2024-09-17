import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";

export type ReviewCreateInput = {
  comments?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  rating?: number | null;
};

import { Hospital } from "../hospital/Hospital";

export type Address = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  hospitals?: Array<Hospital>;
  id: string;
  line1: string | null;
  line2: string | null;
  state: string | null;
  updatedAt: Date;
  zipcode: string | null;
};

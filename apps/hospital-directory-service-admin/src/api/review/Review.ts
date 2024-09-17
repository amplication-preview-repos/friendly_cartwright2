import { Hospital } from "../hospital/Hospital";

export type Review = {
  comments: string | null;
  createdAt: Date;
  hospital?: Hospital | null;
  id: string;
  rating: number | null;
  updatedAt: Date;
};

import { Address } from "../address/Address";
import { Review } from "../review/Review";

export type Hospital = {
  address?: Address | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { HospitalWhereUniqueInput } from "../../hospital/base/HospitalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HospitalUpdateManyWithoutAddressesInput {
  @Field(() => [HospitalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HospitalWhereUniqueInput],
  })
  connect?: Array<HospitalWhereUniqueInput>;

  @Field(() => [HospitalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HospitalWhereUniqueInput],
  })
  disconnect?: Array<HospitalWhereUniqueInput>;

  @Field(() => [HospitalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HospitalWhereUniqueInput],
  })
  set?: Array<HospitalWhereUniqueInput>;
}

export { HospitalUpdateManyWithoutAddressesInput as HospitalUpdateManyWithoutAddressesInput };

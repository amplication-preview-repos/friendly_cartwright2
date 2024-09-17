import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HospitalTitle } from "../hospital/HospitalTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <ReferenceArrayInput source="hospitals" reference="Hospital">
          <SelectArrayInput
            optionText={HospitalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="line1" source="line1" />
        <TextInput label="line2" source="line2" />
        <TextInput label="state" source="state" />
        <TextInput label="zipcode" source="zipcode" />
      </SimpleForm>
    </Create>
  );
};

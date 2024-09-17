import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { HospitalTitle } from "../hospital/HospitalTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
        <ReferenceInput
          source="hospital.id"
          reference="Hospital"
          label="hospital"
        >
          <SelectInput optionText={HospitalTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};

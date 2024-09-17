import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { HOSPITAL_TITLE_FIELD } from "./HospitalTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";

export const HospitalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Review"
          target="hospitalId"
          label="Reviews"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="hospital"
              source="hospital.id"
              reference="Hospital"
            >
              <TextField source={HOSPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

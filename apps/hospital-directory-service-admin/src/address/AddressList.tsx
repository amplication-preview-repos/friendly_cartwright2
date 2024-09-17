import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="line1" source="line1" />
        <TextField label="line2" source="line2" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zipcode" source="zipcode" />{" "}
      </Datagrid>
    </List>
  );
};

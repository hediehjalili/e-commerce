import { IUser } from "@/api/server-api/types";
import React from "react";
import AIForm from "../forms/AIForm";

type Props = {
  defaultValue?: IUser;
};

export default function UserForm({ defaultValue }: Props) {
  return (
    <form>
      <AIForm
        schema={[
          {
            name: "email",
            type: "email",
            defaultValue: defaultValue?.email,
          },
          {
            name: "firstName",
            type: "string",
            defaultValue: defaultValue?.email,
          },
          {
            name: "lastName",
            type: "string",
            defaultValue: defaultValue?.email,
          },
        ]}
      />
    </form>
  );
}

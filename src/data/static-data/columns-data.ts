import { Column } from "src/components/types";

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "username", label: "Username", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

export { columns };

interface ActionSliceTypes {
  name: string;
  username: string;
  email: string;
  phone: string;
}
interface DataSliceTypes {
  usersData: User[];
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
interface Column {
  id: "name" | "username" | "email" | "phone";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export type { ActionSliceTypes, DataSliceTypes, Column };

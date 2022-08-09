export default class User {
  id!: number;
  name!: string;
  phone!: string;
  email!: string;
  website!: string;

  constructor(
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.phone = phone),
      (this.email = email),
      (this.website = website);
  }
}

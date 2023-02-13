export type Quiz = {
    id: string
    title: string,
    image: string,
    questions_count: number,
    difficulty: string,
    time: number,
    is_active: number,
  }

  export type Personal = {
    name:string,
    surname: string,
    email: string,
    phone: number,
}
export type Company = {
  name: string,
  nip: number,
  regon: number,
  address: {
      city: string,
      postcode: string,
      street: string,
      building_number: number,
      house_number: number,
  }
}

export type Financial = {
  iban: string;
  bank_name: string;
  swift: string;
}

export type User = {
  name: string,
  surname: string,
  phone: null | string,
  email: string,
  points: number,
  avatar_path: null | string,
}

export type InvitedUser = {
  name: string
  is_premium: boolean,
  avatar_path: null | string,
}
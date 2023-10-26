export type MyProfile = {
  name: string;
  imageUrl: string;
  occupation: string;
  description: string;
  accounts: Account[];
  skills: Skill[];
  careers: Career[];
}

export type Account = {
  name: string;
  url: string;
  serviceName: string;
  iconUrl: string;
}

export type Career = {
  date: Date;
  event: string;
}

export type Skill = {
  name: string;
  level: number;
  years: number;
  months: number;
  purpose: string;
}

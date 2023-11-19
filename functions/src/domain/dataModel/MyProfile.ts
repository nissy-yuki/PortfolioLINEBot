export type MyProfile = {
  detail: ProfileDetail;
  accounts: Account[];
  skills: Skill[];
  careers: Career[];
}

export type ProfileDetail = {
  name: string;
  imageUrl: string;
  occupation: string;
  description: string;
  affiliation: string;
  affiliation_url: string;
  hobby: string;
  mail: string;
}

export type Account = {
  name: string;
  url: string;
  service: string;
  icon: string;
}

export type Career = {
  year: string;
  month: string;
  event: string;
}

export type Skill = {
  name: string;
  level: number;
  years: number;
  months: number;
  purpose: string;
}

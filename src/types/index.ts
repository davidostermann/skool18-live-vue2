export type Rating = 1 | 2 | 3 | 4 | 5;

export interface User {
  id: string;
  fullName: string;
  codeName: string;
  status: string;
  avatar: string;
  skills: {
    name: string;
    rating: Rating;
  }[];
}

export type NewUser = Omit<User, "id">;

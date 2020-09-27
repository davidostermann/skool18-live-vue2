import { User } from "../types";

type UsersMap = Record<string, User>;

export const usersMap: UsersMap = {
  "1": {
    id: "1",
    codeName: "ALMI",
    fullName: "Alain Michel",
    status: "Consultant",
    avatar: "https://source.unsplash.com/600x400/?green,water",
    skills: [
      {
        name: "VueJS",
        rating: 5
      },
      {
        name: "React",
        rating: 1
      },
      {
        name: "Laravel",
        rating: 3
      }
    ]
  },
  "2": {
    id: "2",
    codeName: "JACO",
    fullName: "François Jacques",
    status: "Consultant confirmé",
    avatar: "https://source.unsplash.com/600x400/?bleu,flower",
    skills: [
      {
        name: "VueJS",
        rating: 2
      },
      {
        name: "React",
        rating: 5
      },
      {
        name: "Laravel",
        rating: 1
      }
    ]
  },
  "3": {
    id: "3",
    codeName: "HELI",
    fullName: "Henri Philippe",
    status: "Consultant sénior",
    avatar: "https://source.unsplash.com/600x400/?yellow,tree",
    skills: [
      {
        name: "VueJS",
        rating: 3
      },
      {
        name: "React",
        rating: 3
      },
      {
        name: "Laravel",
        rating: 3
      }
    ]
  },
  "4": {
    id: "4",
    codeName: "FAFE",
    fullName: "Fabrice Fernand",
    status: "Manager referent",
    avatar: "https://source.unsplash.com/600x400/?yellow,tree",
    skills: [
      {
        name: "VueJS",
        rating: 3
      },
      {
        name: "React",
        rating: 3
      },
      {
        name: "Laravel",
        rating: 3
      }
    ]
  }
};

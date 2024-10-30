export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
}

export interface IRepository {
  id: number;
  name: string;
}

export interface IOrganization {
  id: number;
  name: string;
}

export interface IFollower {
  id: number;
  login: string;
  avatar_url: string;
}

export interface IUserDetails {
  login: string;
  id: number;
  avatar_url: string;
  repos: IRepository[];
  organizations: IOrganization[];
  followers: IFollower[];
  followerCount: number;
}
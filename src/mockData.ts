export const mockUsers = [
  {
    login: "user1",
    id: 1,
    avatar_url: "https://github.com/user1.png",
  },
  {
    login: "user2",
    id: 2,
    avatar_url: "https://github.com/user2.png",
  },
];

export const mockUserDetails = {
  login: "user1",
  id: 1,
  avatar_url: "https://github.com/user1.png",
  repos: [
    { id: 101, name: "Repo1" },
    { id: 102, name: "Repo2" },
  ],
  organizations: [
    { id: 201, name: "Org1" },
    { id: 202, name: "Org2" },
  ],
  followers: [
    { id: 301, login: "follower1", avatar_url: "https://github.com/follower1.png" },
    { id: 302, login: "follower2", avatar_url: "https://github.com/follower2.png" },
  ],
  followerCount: 50,
};

export const mockRepos = [
  { id: 101, name: "Repo1" },
  { id: 102, name: "Repo2" },
];

export const mockOrgs = [
  { id: 201, name: "Org1" },
  { id: 202, name: "Org2" },
];

export const mockFollowers = [
  { id: 301, login: "follower1", avatar_url: "https://github.com/follower1.png" },
  { id: 302, login: "follower2", avatar_url: "https://github.com/follower2.png" },
];
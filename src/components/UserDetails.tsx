import React from 'react';
import { IUserDetails } from '../types';
import { mockRepos, mockOrgs, mockFollowers } from '../mockData';

interface UserDetailsProps {
  details: IUserDetails;
}

function UserDetails({ details }: UserDetailsProps) {
  return (
    <div>
      <img src={details.avatar_url} alt={`${details.login}'s avatar`} />
      <h2>{details.login}</h2>
      <h3>Repositories</h3>
      <ul>
        {mockRepos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <h3>Organizations</h3>
      <ul>
        {mockOrgs.map(org => (
          <li key={org.id}>{org.name}</li>
        ))}
      </ul>
      <h3>Followers ({details.followerCount})</h3>
      <ul>
        {mockFollowers.map(follower => (
          <li key={follower.id}>{follower.login}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
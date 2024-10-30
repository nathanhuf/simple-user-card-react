import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../types';

interface UserCardProps {
  user: IUser;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <Link to={`/user/${user.login}`}>{user.login}</Link>
    </div>
  );
}

export default UserCard;
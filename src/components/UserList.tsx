import React, { useEffect, useState } from 'react';
import { mockUsers } from '../mockData';
import UserCard from './UserCard';
import { IUser } from '../types';

function UserList() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // Simulating an API call with a timeout
    setTimeout(() => {
      setUsers(mockUsers);
    }, 1000);
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import { mockUserDetails } from '../mockData';
import { IUserDetails } from '../types';

interface RouteParams {
  username: string;
}

function UserDetailPage() {
  let { username } = useParams<RouteParams>();
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);

  useEffect(() => {
    // Simulating an API call with a timeout
    setTimeout(() => {
      setUserDetails(mockUserDetails);
    }, 1000);
  }, [username]);

  return (
    <div>
      {userDetails ? <UserDetails details={userDetails} /> : 'Loading...'}
    </div>
  );
}

export default UserDetailPage;
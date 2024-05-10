"use client";
import React, { Suspense, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { refreshToken } from '@/redux/actions/authAction';
import UserDataTable from '@/components/UserDataTable';
import { fetchUsersByLevelRange } from '@/redux/actions/userAction';
import Loading from '../loading';

function Admin() {
  const [userData, setUserData] = useState([])
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(state => state)

  async function fetchUserData(){
    try {
      const data = await fetchUsersByLevelRange(51,100);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    // dispatch(refreshToken());
    fetchUserData();
  }, [dispatch]);


  return (
    <>
      <h1>Admin Page</h1>
      <Suspense fallback={<Loading />}>
        {/* Pass userData to UserDataTable */}
        <UserDataTable userData={userData}/>
      </Suspense>
    </>
  );
}

export default Admin;

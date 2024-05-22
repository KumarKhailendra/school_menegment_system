"use client";
import React, { Suspense, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import UserDataTable from '@/components/UserDataTable';
import { fetchUsersByLevelRange } from '@/redux/actions/userAction';
import Loading from '../loading';

function Staff() {
  const [userData, setUserData] = useState([])
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(state => state)

  async function fetchUserData(){
    try {
      const data = await fetchUsersByLevelRange(21,50);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [dispatch]);


  return (
    <>
      <h1>Staff Page</h1>
      <Suspense fallback={<Loading />}>
        <UserDataTable userData={userData}/>
      </Suspense>
    </>
  );
}

export default Staff;

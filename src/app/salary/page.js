"use client";
import React, { Suspense, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { refreshToken } from '@/redux/actions/authAction';
import UserDataTable from '@/components/UserDataTable';
import { fetchUsersByLevelRange } from '@/redux/actions/userAction';
import Loading from '../loading';
import AdminSalary from '@/components/Salary/AdminSalary';
import StaffSalary from '@/components/Salary/StaffSalary';

function Staff() {
  const [userData, setUserData] = useState([])
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(state => state)

  async function fetchUserData(){
    try {
      const data = await fetchUsersByLevelRange(11,50);
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
      <h1>{auth?.user?.level === 100 ? "Mennege Your Staff Salaries" : "Your Salary Detaile"}</h1>
      <Suspense fallback={<Loading />}>
        {/* Pass userData to UserDataTable */}
        {auth?.user?.level === 100 ? <AdminSalary /> : <StaffSalary />}
        {/* <AdminSalary /> */}
      </Suspense>
    </>
  );
}

export default Staff;

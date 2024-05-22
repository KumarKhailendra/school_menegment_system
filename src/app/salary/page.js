"use client";
import React, { Suspense } from 'react';
import { useAppSelector } from '@/redux/hooks';
import Loading from '../loading';
import AdminSalary from '@/components/Salary/AdminSalary';
import StaffSalary from '@/components/Salary/StaffSalary';

function Staff() {
  const { auth } = useAppSelector(state => state);

  if (!auth || !auth.user) {
    return <p>Loading...</p>;  // Handle the case where auth or auth.user is undefined
  }

  return (
    <>
      <h1>{auth.user.level === 100 ? "Manage Your Staff Salaries" : "Your Salary Details"}</h1>
      <Suspense fallback={<Loading />}>
        {auth.user.level === 100 ? <AdminSalary /> : <StaffSalary />}
      </Suspense>
    </>
  );
}

export default Staff;

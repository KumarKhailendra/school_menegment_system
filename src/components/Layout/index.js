"use client";

import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from "./layout.module.css";
import { logout, refreshToken } from '@/redux/actions/authAction';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Layout = ({ children }) => {
  const { auth } = useAppSelector(state => state)

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <>
      {
        auth?.user?<>
    <div className={styles.sidebar}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about_us"}>About Us</Link>
        <Link href={"/contact_us"}>Contact Us</Link>
        {auth?.user?.level === 100 && <Link href={"/admin"}>Admin</Link>}
        {auth?.user?.level >= 50 && <Link href={"/staff"}>Staff</Link>}
        {auth?.user?.level >= 50 ? <Link href={"/student"}>Student</Link>: <></>}
        {auth?.user?.level < 51 || auth?.user?.level === 100? <Link href={"/attendance"}>Attendance</Link>: <></>}
        {auth?.user?.level >= 50 || auth?.user?.level === 100? <Link href={"/salary"}>Salary</Link>: <></>}
        {auth?.user?.level === 100 && <Link href={"/"}>Services</Link>}
        {auth?.user?.level === 100 && <Link href={"/"}>Carrer</Link>}
        <Link href={"/reviews"}>Reviews</Link>
        <Link href={"/query"}>Query</Link>
        {auth?.user?.level === 100 && <Link href={"/"}>settings</Link>}
        <button type="button" onClick={() => dispatch(logout())}>
          logout
        </button>
    </div>
    <div className={styles.main}>
        { children }
    </div>
    </> 
    : <>{ children }</>
      }
    </>
  )
}

export default Layout

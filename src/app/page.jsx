"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { refreshToken } from "@/redux/actions/authAction";

export default function Home() {
  const { auth } = useAppSelector(state => state)
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(refreshToken());
  // }, [dispatch]);
  return (
    <>
        {auth?.user?.level < 50 && <h3>hello Student</h3>}
        {auth?.user?.level < 100 && auth?.user?.level >= 50 && <h3>hello teacher staff</h3>}
        {auth?.user?.level === 100 && <h3>hello admin</h3>}
    </>
  );
}

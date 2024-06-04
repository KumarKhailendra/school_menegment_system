"use client";
import { useAppSelector } from "@/redux/hooks";
import PerentHome from "@/components/Home/PerentHome";
import StudentPage from "@/components/Student/StudentPage";

export default function Home() {
  const { auth } = useAppSelector(state => state)
  return (
    <>
        {auth?.user?.level < 50 && auth?.user?.level > 10 && <PerentHome />}
        {auth?.user?.level === 10 && <StudentPage user={auth?.user} />}
        {auth?.user?.level < 100 && auth?.user?.level >= 50 && <h3>hello teacher staff</h3>}
        {auth?.user?.level === 100 && <h3>hello admin</h3>}
    </>
  );
}

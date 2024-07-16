"use client";

import useAxios from "@/lib/axios.fetch";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const [userId, setUserId] = useState<string | null>();
  useEffect(() => {
    let id: string | null;
    if (localStorage.getItem("id") !== undefined) {
      id = localStorage.getItem("id");
    } else {
      id = sessionStorage.getItem("id");
    }
    setUserId(id);
  }, []);

  const { data } = useAxios(`http://localhost:3000/api/users/${userId}`);

  if (!data) {
    console.log("Request ...");
  }
  return <div>Dasboard User</div>;
}

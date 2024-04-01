"use client";

import Link from "next/link";
import Hospitalcard from '@/components/Hospitalcard';
import { useGetHospitadataQuery } from "@/redux/hosApi";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const {data:hospitals, isError, isLoading } = useGetHospitadataQuery()
  console.log(hospitals)

if(isLoading){
  return <p> is loading</p>
}

if (isError){
  return <p>err</p>
}

  return (
    <>
    <Header />
    {Array.isArray(hospitals?.data) && hospitals.data.length > 0 && hospitals.data.map((item: HospitalType) => (
  <Hospitalcard
    key={item.id}
    address={item.address.woreda}
    availability={item.availability}
    photo={item.photo}
    phoneNumbers={item.phoneNumbers}
    emails={item.emails}
  />
))}


<Footer />
   </>

  );
}

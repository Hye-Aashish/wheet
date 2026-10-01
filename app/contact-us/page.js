// "use client"
import React from 'react'
import Link from 'next/link'
import { FaGreaterThan } from 'react-icons/fa6'
import Contact from '../components/Contact'

export const metadata = {
  title: "Contact Ayutramart - We're Here to Help",
  description:
    "Get in touch with Ayutramart for any questions, support, or product inquiries. We're here to assist you with your herbal wellness journey.",
};


export default function page() {
  return (
   <>
  
   <Contact/>
   </>


  )
}

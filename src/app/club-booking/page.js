"use client";

import ClubBooking from '@/components/ClubBooking/ClubBooking';
import Navbar from '@/components/ClubBooking/Navbar'
import Tabs from '@/components/ClubBooking/Tabs';
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <ClubBooking />
            {/* <Tabs /> */}
        </div>
    )
}

export default page

"use client";

import ClubDetail from '@/components/ClubDetails/ClubDetail'
import Navbar from '@/components/ClubDetails/Navbar'
import Tabs from '@/components/ClubDetails/Tabs'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <ClubDetail />
            <Tabs />
        </div>
    )
}

export default page

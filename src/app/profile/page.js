"use client";

import Content from '@/components/Profile/Content';
import Info from '@/components/Profile/Info';
import Navbar from '@/components/Profile/Navbar';
import Tabs from '@/components/Profile/Tabs'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <Info />
            <Content />
            <Tabs />
        </div>
    )
}

export default page

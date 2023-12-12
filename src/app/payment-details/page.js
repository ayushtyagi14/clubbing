"use client";

import Navbar from '@/components/PaymentDetails/Navbar'
import PaymentDetails from '@/components/PaymentDetails/PaymentDetails';
import Tabs from '@/components/PaymentDetails/Tabs';
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <PaymentDetails />
            <Tabs />
        </div>
    )
}

export default page

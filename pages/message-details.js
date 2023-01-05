import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from '../components/nav-bar';
import allMessageDetails from '../styles/messageDet.module.scss';

export default function MessageDetail() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Message Detail</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar />
            <div className={allMessageDetails.mesDetContainer}>
                Message Detail
                <button
                    onClick={() => router.back()}
                >
                    x
                </button>
                
            </div>
        </div>
    )
}
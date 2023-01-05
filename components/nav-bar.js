import React from "react";
import Link from 'next/link';
import navbar from '../styles/navbar.module.scss';

export default function NavBar() {
    return (
        <nav className={navbar.nav}>
            <div>
                <Link href="/">
                    <a className={navbar.links}> Home </a>
                </Link>
                <Link href="/instructor-cal" >
                    <a className={navbar.links}> Instructor Calandar </a>
                </Link>
                <Link href="/student-cal">
                    <a className={navbar.links}> Student Calandar </a>
                </Link>
                <Link href="/instructor-dash">
                    <a className={navbar.links}> Instructor Dashboard </a>
                </Link>
                <Link href="/student-dash">
                    <a className={navbar.links}> Student Dashboard </a>
                </Link>
            </div>
        </nav>
    )
}
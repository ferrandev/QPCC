import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <nav>
                <menu>
                    <Link href="/Home">Home</Link>
                    <Link href="/About">About</Link>
                </menu>
            </nav>
        </div>
    )
}

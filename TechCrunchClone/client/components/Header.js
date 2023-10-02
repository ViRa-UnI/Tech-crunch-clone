import React from 'react';
import Link from 'next/link';
import '../styles/Header.css';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <Link href="/">
                    <a className="logo">TechCrunch Clone</a>
                </Link>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/admin">
                        <a>Admin</a>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
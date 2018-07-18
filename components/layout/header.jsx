import React from 'react';
import Link from 'next/link';

const header = () => {
    return (
        <div>
            <Link href="/">
                <a>Home | </a>
            </Link>
            <Link href="/about">
                <a>About | </a>
            </Link>
            <Link href="/abcd">
                <a>NotFound</a>
            </Link>
        </div>
    );
};

export default header;

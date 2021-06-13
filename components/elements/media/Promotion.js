import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';

const Promotion = ({ link, image }) => {
    if (image) {
        return (
            <Link href={link}>
                <a className="ps-collection">
                    <img src={`${baseUrl}${image.url}`} alt="EASYCHIC" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={link ? link : '/boutique'}>
                <a className="ps-collection">
                    <img src="/static/img/not-found.jpg" alt="EASYCHIC" />
                </a>
            </Link>
        );
    }
};

export default Promotion;

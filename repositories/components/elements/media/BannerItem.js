import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';

const BannerItem = ({ source }) => {
    if (source) {
        return (
            <Link href="/boutique">
                <a>
                    <img src={`${baseUrl}${source.image.url}`} alt="EASYCHIC" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href="/boutique">
                <a>
                    <a className="ps-collection">
                        <img src="/static/img/not-found.jpg" alt="EASYCHIC" />
                    </a>
                </a>
            </Link>
        );
    }
};

export default BannerItem;

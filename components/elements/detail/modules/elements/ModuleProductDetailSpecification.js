import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = () => (
    <div className="ps-product__specification">
        <Link href="/page/blank">
            <a className="report">Report Abuse</a>
        </Link>
        <p>
            <strong>SKU:</strong> SF1133569600-1
        </p>
        <p className="categories">
            <strong> Categories:</strong>
            <Link href="/boutique">
                <a>Consumer Electronics</a>
            </Link>
            <Link href="/boutique">
                <a>Refrigerator</a>
            </Link>
            <Link href="/boutique">
                <a>Babies & Moms</a>
            </Link>
        </p>
        <p className="tags">
            <strong> Tags</strong>
            <Link href="/boutique">
                <a>sofa</a>
            </Link>
            <Link href="/boutique">
                <a>technologies</a>
            </Link>
            <Link href="/boutique">
                <a>wireless</a>
            </Link>
        </p>
    </div>
);

export default ModuleProductDetailSpecification;

import React, { Component } from 'react';
import Link from 'next/link';
import Product from '../../../components/elements/products/Product';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../utilities/product-helper';
class ProductWidgets extends Component{

    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <section>
                <aside className="widget widget_product widget_features">
                    <p>
                        <i className="icon-network"></i> Shipping worldwide
                    </p>
                    <p>
                        <i className="icon-3d-rotate"></i> Free Shipping
                    </p>
                    <p>
                        <i className="icon-receipt"></i> This Product can't be
                        rented for more then 30 consecutive days
                    </p>
                    <p>
                        <i className="icon-credit-card"></i> Pay online or when
                        receiving goods
                    </p>
                </aside>
                <aside className="widget widget_ads">
                    <Link href="/boutique">
                        <a>
                            <img src="/static/img/ads/product-ads.png" alt="EASYCHIC" />
                        </a>
                    </Link>
                </aside>
            </section>
        );
    }

}

export default connect(state=>state.collection)(ProductWidgets);

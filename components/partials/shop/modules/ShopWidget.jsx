import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
    getProducts,
    getTotalProducts,
    getBrands,
    getProductCategories,
    getProductsByCategory,
} from '../../../../store/product/action';
class ShopWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceMin: 0,
            priceMax: 2000,
        };
    }

    handleFilterProductsByCategory(e, slug) {
        e.preventDefault();
        if (slug !== null) {
            Router.push({ pathname: '/shop', query: { category: slug } });
            this.props.dispatch(getProductsByCategory(slug));
        } else {
            const params = {
                _start: 1,
                _limit: 12,
            };
            this.props.dispatch(getProducts(params));
            this.props.dispatch(getTotalProducts());
        }
    }

    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getProductCategories());
    }

    render() {
        const { brands, categories } = this.props;
        const brandsGroup = [];
        if (brands.length > 0) {
            brands.forEach(brand => {
                brandsGroup.push({
                    id: brand.id,
                    value: brand.id,
                    label: brand.name,
                });
            });
        }
        return (
            <div className="ps-layout__left">
                <aside className="widget widget_shop">
                    <h4 className="widget-title">Categories</h4>
                    {categories && categories.length > 0 ? (
                        <ul className="ps-list--categories">
                            <li>
                                <a
                                    href="/shop"
                                    onClick={e =>
                                        this.handleFilterProductsByCategory(
                                            e,
                                            null
                                        )
                                    }>
                                    All
                                </a>
                            </li>
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a
                                        href={`shop?category=${category.slug}`}
                                        onClick={e =>
                                            this.handleFilterProductsByCategory(
                                                e,
                                                category.slug
                                            )
                                        }>
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        'No Category'
                    )}
                </aside>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.product;
};
export default connect(mapStateToProps)(ShopWidget);

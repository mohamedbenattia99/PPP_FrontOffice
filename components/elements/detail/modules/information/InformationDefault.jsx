import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Rating from '../../../Rating';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/elements/ModuleProductDetailSharing';
import { addItem } from '../../../../../store/cart/action';
import { addItemToCompare } from '../../../../../store/compare/action';
import { addItemToWishlist } from '../../../../../store/wishlist/action';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/elements/ModuleProductDetailSpecification';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/elements/ModuleProductDetailDescription';
import { imageSwatcher } from '~/public/static/data/product-detail.json';
import ImageFromApi from '~/components/elements/detail/modules/elements/ImageFromApi';

class InformationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            selectedVariant: null,
            selectedSize: null,
            sizeItems: null,
            price: null,
        };
    }

    handleAddItemToCart = e => {
        e.preventDefault();
        const { product } = this.props;
        let tempProduct = product;
        tempProduct.quantity = this.state.quantity;
        this.props.dispatch(addItem(product));
    };

    handleAddItemToCompare = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToWishlist(product));
    };

    handleIncreaseItemQty = e => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecreaseItemQty = e => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    handleSelectColor(colorId) {
        const { product } = this.props;

        if (product && product.variants.length > 0) {
            const selectedVariant = product.variants.find(
                item => item.id === colorId
            );

            if (selectedVariant) {
                const sizeItems = selectedVariant.sizes;
                this.setState({ sizeItems: sizeItems });
            }

            this.setState({ selectedVariant: selectedVariant });
        }
    }

    handleSelectSize(sizeId) {
        const { sizeItems } = this.state;
        if (sizeItems && sizeItems) {
            const selectedSizeItem = sizeItems.find(item => item.id === sizeId);
            if (selectedSizeItem) {
                this.setState({ selectedSize: selectedSizeItem });
            }
        }
    }
    componentDidMount() {
        const { product } = this.props;
        if (product && product.variants.length > 0) {
            this.setState({ selectedVariant: product.variants[0] });
        }
    }

    render() {
        const { product, currency } = this.props;
        const { selectedVariant, selectedSize, sizeItems } = this.state;
        let variants, sizeSelectionArea, priceArea;
        if (selectedVariant !== null) {
            if (selectedVariant.is_sale) {
                priceArea = (
                    <h4 className="ps-product__price sale">
                        <del className="mr-2">
                            {currency ? currency.symbol : '$'}
                            {selectedVariant.sale_price}
                        </del>
                        {currency ? currency.symbol : '$'}
                        {selectedVariant.price}
                    </h4>
                );
            } else {
                priceArea = (
                    <h4 className="ps-selectedVariant__price">
                        {currency ? currency.symbol : '$'}
                        {selectedVariant.price}
                    </h4>
                );
            }
        }

        if (product) {
            if (product.variants.length > 0) {
                let colorSelectionArea = product.variants.map(item => {
                    return (
                        <div
                            className={`ps-variant ps-variant--image ${
                                selectedVariant &&
                                selectedVariant.id === item.id
                                    ? 'active'
                                    : ''
                            }`}
                            key={item.id}
                            onClick={e => this.handleSelectColor(item.id)}>
                            <span className="ps-variant__tooltip">
                                {item.name}
                            </span>
                            {item.thumbnail !== null ? (
                                <ImageFromApi
                                    url={item.thumbnail.url}
                                    alt={item.thumbnail.name}
                                />
                            ) : (
                                ''
                            )}
                        </div>
                    );
                });
                if (sizeItems !== null) {
                    sizeSelectionArea = sizeItems.map(item => {
                        return (
                            <div
                                className={`ps-variant ps-variant--size ${
                                    selectedSize && selectedSize.id === item.id
                                        ? 'active'
                                        : ''
                                }`}
                                key={item.id}
                                onClick={e => this.handleSelectSize(item.id)}>
                                <span className="ps-variant__tooltip">
                                    {item.name}
                                </span>
                                <span className="ps-variant__size">
                                    {item.character}
                                </span>
                            </div>
                        );
                    });
                }
                variants = (
                    <div className="ps-product__variations">
                        <figure>
                            <figcaption>
                                Color:
                                <strong>
                                    {selectedVariant !== null
                                        ? selectedVariant.name
                                        : 'Choose an option'}
                                </strong>
                            </figcaption>
                            {colorSelectionArea}
                        </figure>
                        {selectedVariant !== null}
                        <figure>
                            <figcaption>
                                Size:
                                <strong className="pl-1">
                                    {selectedSize !== null
                                        ? selectedSize.name
                                        : 'Choose an option'}
                                </strong>
                            </figcaption>
                            {sizeSelectionArea}
                        </figure>
                    </div>
                );
            } else {
                if (product.is_sale) {
                    priceArea = (
                        <h4 className="ps-product__price sale">
                            <del className="mr-2">
                                {currency ? currency.symbol : '$'}
                                {product.sale_price}
                            </del>
                            {currency ? currency.symbol : '$'}
                            {product.price}
                        </h4>
                    );
                } else {
                    priceArea = (
                        <h4 className="ps-product__price">
                            {currency ? currency.symbol : '$'}
                            {product.price}
                        </h4>
                    );
                }
            }
        }

        return (
            <div className="ps-product__info">
                <h1>{product.title}</h1>
                <div className="ps-product__meta">
                    <p>
                        Brand:
                        <Link href="/shop">
                            <a className="ml-2 text-capitalize">
                                {product.vendor}
                            </a>
                        </Link>
                    </p>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>(1 review)</span>
                    </div>
                </div>
                {priceArea}
                <ModuleProductDetailDescription product={product} />
                {variants}
                <div className="ps-product__shopping">
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={this.handleIncreaseItemQty.bind(this)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={this.handleDecreaseItemQty.bind(this)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={this.state.quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={this.handleAddItemToCart.bind(this)}>
                        Add to cart
                    </a>
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={this.handleAddItemToCart.bind(this)}>
                        Buy Now
                    </a>
                    <div className="ps-product__actions">
                        <a
                            href="#"
                            onClick={this.handleAddItemToWishlist.bind(this)}>
                            <i className="icon-heart"></i>
                        </a>
                        <a
                            href="#"
                            onClick={this.handleAddItemToCompare.bind(this)}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                </div>
                <ModuleProductDetailSpecification />
                <ModuleProductDetailSharing />
                <div className="ps-product__actions-mobile">
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={this.handleAddItemToCart.bind(this)}>
                        Add to cart
                    </a>
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={this.handleAddItemToCart.bind(this)}>
                        Buy Now
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};

export default connect(mapStateToProps)(InformationDefault);

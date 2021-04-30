import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailDefault from './modules/thumbnail/ThumbnailDefault';
import InformationDefault from './modules/information/InformationDefault';
import DefaultDescription from './modules/description/DefaultDescription';
import ModuleProductHasVariants from '~/components/elements/detail/modules/ModuleProductHasVariants';

class ProductDetailFullwidth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { singleProduct } = this.props;
        if (singleProduct !== null && typeof singleProduct !== 'Array') {
            if (singleProduct.variants.length > 0) {
                return (
                    <div className="ps-product--detail ps-product--fullwidth">
                        <ModuleProductHasVariants product={singleProduct} />
                        <DefaultDescription />
                    </div>
                );
            } else {
                return (
                    <div className="ps-product--detail ps-product--fullwidth">
                        <div className="ps-product__header">
                            <ThumbnailDefault product={singleProduct} />
                            <InformationDefault product={singleProduct} />
                        </div>
                        <DefaultDescription />
                    </div>
                );
            }
        } else {
            return <p>No Data</p>;
        }
    }
}

const mapStateToProps = state => {
    return state.product;
};

export default connect(mapStateToProps)(ProductDetailFullwidth);

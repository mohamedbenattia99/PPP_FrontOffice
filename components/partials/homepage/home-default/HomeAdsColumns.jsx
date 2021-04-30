import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getItemBySlug } from '../../../../utilities/product-helper';
import Promotion from '../../../elements/media/Promotion';

const HomeAdsColumns = props => {
    const { promotions } = props;
    const promotionData = getItemBySlug(
        promotions,
        'home_fullwidth_promotions'
    );
    let promotion1, promotion2, promotion3;

    if (promotionData) {
        promotion1 = getItemBySlug(promotionData.items, 'middle_1');
        promotion2 = getItemBySlug(promotionData.items, 'middle_2');
        promotion3 = getItemBySlug(promotionData.items, 'middle_3');
    }
    return (
        <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={promotion1 ? promotion1.image : null}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={promotion2 ? promotion2.image : null}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            link="/shop"
                            image={promotion3 ? promotion3.image : null}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(state => state.media)(HomeAdsColumns);

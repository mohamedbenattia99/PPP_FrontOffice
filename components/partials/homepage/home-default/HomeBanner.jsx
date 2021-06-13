import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import { connect } from 'react-redux';
import { getItemBySlug } from '../../../../utilities/product-helper';
import BannerItem from '../../../elements/media/BannerItem';

class HomeBanner extends Component {
    render() {
        const { banners, promotions } = this.props;
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        const bannerData = getItemBySlug(banners, 'banner-home-fullwidth');
        const promotionData = getItemBySlug(
            promotions,
            'home_fullwidth_promotions'
        );
        let promotion1, promotion2;

        if (promotionData) {
            promotion1 = getItemBySlug(promotionData.items, 'main_1');
            promotion2 = getItemBySlug(promotionData.items, 'main_2');
        }
        return (
            <div className="ps-home-banner ps-home-banner--1">
                <div className="ps-container">
                    <div className="ps-section__left">
                        {bannerData !== null ? (
                            <Slider
                                {...carouselSetting}
                                className="ps-carousel">
                                {bannerData.items.map(item => (
                                    <BannerItem source={item} key={item.id} />
                                ))}
                            </Slider>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.media)(HomeBanner);

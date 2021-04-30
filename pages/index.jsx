import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
import ConumerElectronics from '../components/partials/homepage/home-default/ConumerElectronics';
import Clothings from '../components/partials/homepage/home-default/Clothings';
import GardenAndKitchen from '../components/partials/homepage/home-default/GardenAndKitchen';
import HomeAds from '../components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '../components/partials/commons/DownLoadApp';
import NewArrivals from '../components/partials/homepage/home-default/NewArrivals';
import Newletters from '../components/partials/commons/Newletters';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HomeDefaultDealOfDay from '../components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import SubscribePopup from '../components/shared/SubscribePopup';
import { getCollections } from '../store/collection/action';
import { getBannersBySlugs, getPromotionsBySlugs } from '../store/media/action';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;

        if (query) {
            const collectionsSlug = [
                'deal-of-the-day',
                'consumer-electronics',
                'clothings',
                'garden-and-kitchen',
                'new-arrivals-products',
                'fullwidth-consumer-electronic-best-seller',
                'fullwidth-consumer-electronic-most-popular',
                'fullwidth-clothing-best-sellers',
                'fullwidth-clothing-most-popular',
                'fullwidth-kitchen-most-popular',
                'fullwidth-kitchen-best-sellers',
            ];
            const bannerSlugs = ['banner-home-fullwidth'];
            const promotionSlugs = ['home_fullwidth_promotions'];
            this.props.dispatch(getBannersBySlugs(bannerSlugs));
            this.props.dispatch(getPromotionsBySlugs(promotionSlugs));
            this.props.dispatch(getCollections(collectionsSlug));
        }
        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 10000);
    }

    render() {
        const { subscribe } = this.state;
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-1">
                    <HomeBanner />
                    <SiteFeatures />
                    <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
                    <HomeAdsColumns />
                    <HomeDefaultTopCategories />
                    <ConumerElectronics collectionSlug="consumer-electronics" />
                    <Clothings collectionSlug="clothings" />
                    <GardenAndKitchen collectionSlug="garden-and-kitchen" />
                    <HomeAds />
                    <DownLoadApp />
                    <NewArrivals collectionSlug="new-arrivals-products" />
                    <Newletters />
                </main>
                <FooterFullwidth />
            </div>
        );
    }
}

export default connect(state => state.collection)(Index);

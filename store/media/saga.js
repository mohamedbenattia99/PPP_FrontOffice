import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { actionTypes, getBannersSuccess, getPromotionsSuccess } from './action';
import MediaRepository from '../../repositories/MediaRepository';

polyfill();

function* getBannersBySlugs({ payload }) {
    try {
        const data = yield call(MediaRepository.getBannersBySlugs, payload);
        yield put(getBannersSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* getPromotionsBySlugs({ payload }) {
    try {
        const data = yield call(MediaRepository.getPromotionsBySlugs, payload);
        yield put(getPromotionsSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_BANNERS, getBannersBySlugs)]);
    yield all([takeEvery(actionTypes.GET_PROMOTIONS, getPromotionsBySlugs)]);
}

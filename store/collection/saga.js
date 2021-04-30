import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import {
    actionTypes,
    getCategoriesSuccess,
    getCollectionsSuccess,
} from './action';
import CollectionRepository from '../../repositories/CollectionRepository';
polyfill();

function* getCollections({ payload }) {
    try {
        const data = yield call(CollectionRepository.getCollections, payload);
        yield put(getCollectionsSuccess(data));
    } catch (err) {
        console.log(err);
    }
}
function* getCollectionByCategories({ payload }) {
    try {
        const data = yield call(
            CollectionRepository.getCategoriesBySlug,
            payload
        );
        yield put(getCategoriesSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_COLLECTIONS, getCollections)]);
    yield all([
        takeEvery(actionTypes.GET_CATEGORIES, getCollectionByCategories),
    ]);
}

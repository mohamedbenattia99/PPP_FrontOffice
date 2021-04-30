import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import ProductRepository from '../../repositories/ProductRepository';

import {
    actionTypes,
    getProductsError,
    getProductsSuccess,
    getSingleProductsSuccess,
    getTotalProductsSuccess,
    getProductCategoriesSuccess,
    getBrandsSuccess,
    getProductByKeywordsSuccess,
} from './action';
polyfill();

function* getProducts({ payload }) {
    try {
        const data = yield call(ProductRepository.getRecords, payload);
        yield put(getProductsSuccess(data));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getTotalOfProducts() {
    try {
        const result = yield call(ProductRepository.getTotalRecords);
        yield put(getTotalProductsSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

function* getBrands() {
    try {
        const result = yield call(ProductRepository.getBrands);
        yield put(getBrandsSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

function* getProductCategories() {
    try {
        const result = yield call(ProductRepository.getProductCategories);
        yield put(getProductCategoriesSuccess(result));
    } catch (err) {
        console.log(err);
    }
}

function* getProductById({ id }) {
    try {
        const product = yield call(ProductRepository.getProductsById, id);
        yield put(getSingleProductsSuccess(product));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByCategory({ category }) {
    try {
        const result = yield call(
            ProductRepository.getProductsByCategory,
            category
        );
        yield put(getProductsSuccess(result));
        yield put(getTotalProductsSuccess(result.length));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByPriceRange({ payload }) {
    try {
        const products = yield call(
            ProductRepository.getProductsByPriceRange,
            payload
        );
        yield put(getProductsSuccess(products));
        yield put(getTotalProductsSuccess(products.length));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByBrand({ payload }) {
    try {
        const brands = yield call(
            ProductRepository.getProductsByBrands,
            payload
        );
        const products = [];
        brands.forEach(brand => {
            brand.products.forEach(product => {
                products.push(product);
            });
        });
        yield put(getProductsSuccess(products));
        yield put(getTotalProductsSuccess(products.length));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

function* getProductByKeyword({ keyword }) {
    try {
        const searchParams = {
            title_contains: keyword,
        };
        const result = yield call(ProductRepository.getRecords, searchParams);
        yield put(getProductByKeywordsSuccess(result));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_PRODUCTS, getProducts)]);
    yield all([
        takeEvery(actionTypes.GET_TOTAL_OF_PRODUCTS, getTotalOfProducts),
    ]);
    yield all([takeEvery(actionTypes.GET_BRANDS, getBrands)]);
    yield all([
        takeEvery(actionTypes.GET_PRODUCT_CATEGORIES, getProductCategories),
    ]);
    yield all([
        takeEvery(actionTypes.GET_PRODUCTS_BY_CATEGORY, getProductByCategory),
    ]);
    yield all([
        takeEvery(
            actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
            getProductByPriceRange
        ),
    ]);
    yield all([
        takeEvery(actionTypes.GET_PRODUCTS_BY_BRAND, getProductByBrand),
    ]);
    yield all([
        takeEvery(actionTypes.GET_PRODUCTS_BY_KEYWORD, getProductByKeyword),
    ]);
    yield all([takeEvery(actionTypes.GET_PRODUCT_BY_ID, getProductById)]);
}

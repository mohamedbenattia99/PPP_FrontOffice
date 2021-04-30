import { actionTypes } from './action';

export const initialState = {
    banners: [],
    promotions: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_BANNERS_SUCCESS:
            return {
                ...state,
                ...{ banners: action.payload },
            };
        case actionTypes.GET_PROMOTIONS_SUCCESS:
            return {
                ...state,
                ...{ promotions: action.payload },
            };
        default:
            return state;
    }
}

export default reducer;

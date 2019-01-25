import { LAT_LNG_CHANGE } from './../actions/appActions';

const INITIAL_STATE = {
    latLng: {
        lat: 0, 
        lng: 0
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LAT_LNG_CHANGE:
            return {
                ...state, 
                latLng: action.payload
            };
        default:
            return state;
    }
}
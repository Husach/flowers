import { createSelector } from "reselect";

const getState = () => createSelector(
    [collectOrderByState],
    (state) => state
);

const collectOrderByState = (store) => {
    let {
        shop: {
            selectedCity,
            itemsMap
        },
        basket: {
            isModalFlag,
            inOrderMap,
            amount
        }} = store;

    return {
        shop: {
            selectedCity,
            itemsMap
        },
        basket: {
            isModalFlag,
            inOrderMap,
            amount
        }
    }
};

export const mapStateToProps = (state, props) => {
    return getState()(state, props);
};
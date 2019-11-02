import { store } from "../../index";

export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        id
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id
    }
}

export const addItem = (id) => {
    return {
        type: 'ADD_QUANTITY',
        id
    }
}

export const subItem = (id) => {
    return {
        type: 'SUB_QUANTITY',
        id
    }
}

export const login = (id) => {
    return {
        type: 'LOGIN',
        id
    }
}

export const fetchProducts = () => {
    return {
        type: "FETCH_PRODUCT"
    };
}

export const receiveProducts = product => {
    return {
        type: "FETCHED_PRODUCT",
        data: product
    };
};

export const thunk_action_creator = () => {
    store.dispatch(fetchProducts());
    return function (dispatch, getState) {
        return fetch(`http://localhost:4000/api/products`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {
                    throw new Error("No such user found!!");
                } else dispatch(receiveProducts(data));
            })
            .catch(err => dispatch(console.log(err)));
    };
};

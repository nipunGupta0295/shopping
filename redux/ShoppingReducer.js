import * as types from './actionTypes';
import img from '../assets/images/pencil.png';
import img2 from '../assets/images/book.jpg'
import img3 from '../assets/images/smartphone.jpg'
import img4 from '../assets/images/speaker.jpg'

const INITIAL_STATE = {
    products: [{ id: 1, src: img, name: "Pencil", Price: 10 }, { id: 2, src: img2, name: "Book", Price: 100 }, { id: 3, src: img3, name: "Smartphone", Price: 1000 }, { id: 4, src: img4, name: "Speaker", Price: 200 }],
    cart: [],
    currentScreen: "Login"
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            const item = state.products.find((product) => {
                return product.id == action.payload.id
            })

            console.log("item", item);

            const inCart = state.cart.find((item) => {
                return item.id == action.payload.id ? true : false
            })

            return {
                ...state,
                cart: inCart ?
                    state.cart.map((item) =>
                        item.id == action.payload.id ? { ...item, qty: item.qty + 1 } : item) :
                    [...state.cart, { ...item, qty: 1 }]
            }

        case types.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id !== action.payload.id)
            }

        case types.EMPTY_CART:
            return {
                ...state,
                cart:[]
            }
        default:
            return state;
    }
}

export default shopReducer
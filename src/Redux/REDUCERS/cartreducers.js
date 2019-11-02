// import Item1 from '../../Images/ring.jpg'
// import Item2 from '../../Images/circlependant.jpg'
// import Item3 from '../../Images/threestroktops.jpg'
// import Item4 from '../../Images/circletops.jpg'
//import { addToCart, removeItem, addItem, subItem } from '../ACTION/cartAction'


const initState = {
    items: [
        // { id: 1, title: 'Golden Ring', desc: "Classic Golden Beaded Ring", price: 80, img: Item1 },
        // { id: 2, title: 'Elegant Pendant', desc: "Elegant Gold Pendant", price: 180, img: Item2 },
        // { id: 3, title: 'Stylish Earring', desc: "Shiny Stylish Earrings", price: 120, img: Item3 },
        // { id: 4, title: 'Casual Tops', desc: "Classic Casual Tops", price: 100, img: Item4 },

    ],
    addedItems: [],
    total: 0,
    totalItems: 0,
    login: false,

}
const cartReducer = (state = initState, action) => {

    if (action.type === 'ADD_TO_CART') {
        let addedItem = state.items.find(item => item._id === action.id)
        //check if the action id exists in the addedItems
        let existedItem = state.addedItems.find(item => action.id === item._id)
        if (existedItem) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price,
                totalItems: state.totalItems + 1
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                totalItems: state.totalItems + 1
            }

        }
    }
    if (action.type === 'REMOVE_ITEM') {
        let itemToRemove = state.addedItems.find(item => action.id === item._id)
        let newItems = state.addedItems.filter(item => action.id !== item._id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: newItems,
            total: newTotal,
            totalItems: state.totalItems - itemToRemove.quantity
        }
    }

    if (action.type === 'ADD_QUANTITY') {
        let addedItem = state.items.find(item => item._id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal,
            totalItems: state.totalItems + 1
        }
    }
    if (action.type === 'SUB_QUANTITY') {
        let addedItem = state.items.find(item => item._id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item._id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                totalItems: state.totalItems - 1
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal,
                totalItems: state.totalItems - 1
            }
        }
    }

    if (action.type === 'LOGIN') {
        return {
            ...state,
            login: true
        }
    }

    if (action.type === 'LOGOUT') {
        return {
            ...state,
            login: false
        }
    }

    if (action.type === 'FETCH_PRODUCT') {
        return {
            ...state,
            items: [],
        }
    }
    if (action.type === 'FETCHED_PRODUCT') {
        return {
            ...state,
           items: action.data,
        }
    }


    return state
}




export default cartReducer;
import { useReducer } from 'react'
import { CartContext } from './cart-context'

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const CartReducer = (prevState, action) => {
	if (action.type === 'ADD') {
		const currentIndex = prevState.items.findIndex(
			(el) => el.id === action.item.id,
		)

		if (currentIndex === -1) {
			const updateItems = prevState.items.concat(action.item)
			const updateTotalAmount = prevState.totalAmount + action.item.price * action.item.amount
			return {
				items: updateItems,
				totalAmount: updateTotalAmount,
			}
		} else {
			const updateTotalAmount =
				prevState.totalAmount + action.item.price * action.item.amount
			const updateItems = prevState.items.map((el, index) => {
				return index === currentIndex
					? {
							...el,
							price:
								el.price +
								action.item.price * action.item.amount,
							amount: el.amount + action.item.amount,
					  }
					: el
			})
			return {
				items: updateItems,
				totalAmount: updateTotalAmount,
			}
		}
	}
	return defaultCartState
}
const CartProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(CartReducer, defaultCartState)
	const addItemToCartHandler = (item) => {
		dispatchCart({ type: 'ADD', item: item })
	}
	const removeItemHandler = (id) => {}
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemHandler,
	}
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider> 
	)
}
export default CartProvider

import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { CartContext } from '../../store/cart-context'
import { useContext } from 'react'
const Cart = (props) => {
	const ctx = useContext(CartContext)

	const cartItem = (
		<ul className={classes['cart-items']}>
			{ctx.items.map((el) => (
				<div className={classes.cartItem}>
					<h3>{el.name}</h3>
					
					<h3>{el.amount}</h3>
                    <h3>{el.price}</h3>
				</div>
			))}
		</ul>
	)
	return (
		<Modal onCloseCart={props.onCloseCart}>
			{cartItem}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{ctx.totalAmount.toFixed(2)}</span>
			</div>
			<div className={classes.actions}>
				<button
					onClick={props.onCloseCart}
					className={classes['button--alt']}
				>
					Close
				</button>
				<button className={classes.button}>Open</button>
			</div>
		</Modal>
	)
}

export default Cart

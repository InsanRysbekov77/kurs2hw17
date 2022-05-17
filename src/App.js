import './App.css'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import CartProvider from './store/CartProvider'

function App() {
	const [cartIsShow, setIsCartShow] = useState(false)

	const showCartHandler = () => {
		setIsCartShow(true)
	}
	const hideCartHandler = () => {
		setIsCartShow(false)
	}
	return (
		<CartProvider>
			{cartIsShow && <Cart onCloseCart={hideCartHandler}/>}
			<Header onShowCart={showCartHandler}/>
			<main>
				<Meals />
			</main>
		</CartProvider>
	)
}

export default App

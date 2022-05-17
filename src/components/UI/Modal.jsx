import React from 'react'
import { createPortal } from 'react-dom'
import classes from './Modal.module.css'

export const Backdrop = (props) => {
	return <div onClick={props.onCloseCart} className={classes.backdrop}></div>
}
export const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	)
}
const portalElement = document.getElementById('overlays')
const Modal = (props) => {
	return (
		<>
			{createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalElement)}
			{createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement,
			)}
		</>
	)
}

export default Modal

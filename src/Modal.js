import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	console.log('why isnt this fucking working');
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active">
			<div onClick={(e) => e.stopPropagation()} className="ui fluid card">
				<div className="actions">{props.actions}</div>
				<div className="header">{props.title}</div>
				<div className="content">{props.content} </div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;

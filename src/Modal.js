import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

class Modal extends React.Component {
	render() {
		return ReactDOM.createPortal(
			<div
				onClick={this.props.toggle}
				className="ui dimmer modals visible active">
				<div
					onClick={(e) => e.stopPropagation()}
					className="ui standard modal visible active">
					<div>{this.props.content}</div>
				</div>
			</div>,
			document.querySelector('#modal')
		);
	}
}

export default Modal;

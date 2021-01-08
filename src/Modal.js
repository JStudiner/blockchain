import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import PropTypes from 'prop-types';
class Modal extends React.Component {
	componenetDidMount() {
		document.addEventListener('click', this.closeModal, false);
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.closeModal, false);
	}
	closeModal = ({ target }) => {
		if (this.modal && !this.modal.contains(target)) {
			this.props.toggle();
		}
	};
	render() {
		return ReactDOM.createPortal(
			<div className="ui dimmer modals visible active">
				<div className="ui standard modal visible active">
					<div ref={(node) => (this.modal = node)}>{this.props.content}</div>
				</div>
			</div>,
			document.querySelector('#modal')
		);
	}
}
Modal.propTypes = {
	children: PropTypes.node.isRequired,
	toggleModal: PropTypes.func.isRequired,
};
export default Modal;

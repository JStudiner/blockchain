import React from 'react';
import { connect } from 'react-redux';
import { addPeer, addBlock, reset } from '../actions';
import Modal from '../Modal';
import InfoPage from './InfoPage';
import '../Modal.css';
class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { toggleModal: false, modalCase: '' };
	}

	toggleModal = () => {
		this.setState((prevState) => ({ toggleModal: !prevState.toggleModal }));
	};
	renderError(message) {
		return (
			<div className="ui negative message">
				<i
					onClick={() => {
						this.toggleModal();
					}}
					className="ui close icon float:right;"></i>
				<div className="header">{message}</div>
			</div>
		);
	}
	renderErrorModal(message) {
		if (this.state.toggleModal === true) {
			return (
				<div>
					<Modal
						content={this.renderError(message)}
						toggle={this.toggleModal}
					/>
				</div>
			);
		}
	}
	renderInfoModal() {
		if (this.state.toggleModal === true) {
			return (
				<div>
					<Modal content={this.renderInfo()} toggle={this.toggleModal} />
				</div>
			);
		}
	}
	renderInfo() {
		return (
			<div className="ui container">
				<div className="ui top attached label">
					Blockchain Demo{' '}
					<i
						onClick={() => {
							this.toggleModal();
						}}
						className="ui close icon close-x"></i>
				</div>
				<InfoPage />
			</div>
		);
	}
	renderModals() {
		if (this.state.modalCase === 'Error') {
			return (
				<div>
					{this.renderErrorModal(
						'You must repair the blockchain before adding another block'
					)}
				</div>
			);
		} else if (this.state.modalCase === 'Info') {
			return <div>{this.renderInfoModal()}</div>;
		}
	}
	render() {
		const { peers } = this.props;
		let blockCount = peers[0].blockchain.length;
		var flag = true;
		for (var i = 0; i < peers[0].blockchain.length; i++) {
			if (peers[0].blockchain[i].valid === false) {
				flag = false;
			}
		}

		return (
			<div className="ui inverted menu">
				{this.renderModals()}
				<div className="header item">BlockChain Demo</div>
				<button
					className="ui black button"
					onClick={() => {
						this.props.addPeer(peers.length);
					}}>
					Add a Peer
				</button>
				<button
					className="ui black button"
					onClick={() => {
						for (let j = 0; j < peers.length; j++) {
							if (peers[j].connected === true) {
								if (this.state.toggleModal === false) {
									if (flag === true) {
										this.props.addBlock(blockCount, peers[j], 'data');
									} else {
										this.toggleModal();
										this.setState({ modalCase: 'Error' });
									}
								}
							}
						}
						blockCount++;
					}}>
					Add a Block
				</button>
				<button
					className="ui black button"
					onClick={() => {
						this.props.reset();
						this.setState({ peerCount: 0 });
					}}>
					Reset
				</button>
				<div className="right menu">
					<button
						className="ui black button"
						onClick={() => {
							this.toggleModal();
							this.setState({ modalCase: 'Info' });
						}}>
						<i className="inverted info circle icon"></i>
					</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { peers: state.peers };
};
export default connect(mapStateToProps, { reset, addPeer, addBlock })(Header);

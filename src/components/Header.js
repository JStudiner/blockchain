import React from 'react';
import { connect } from 'react-redux';
import { addPeer, addBlock, reset } from '../actions';
import Modal from '../Modal';
class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showModal: false };
	}

	toggleModal = () => {
		this.setState((prevState) => ({ showModal: !prevState.showModal }));
	};
	renderError() {
		console.log('working');
		return (
			<div className="ui negative message">
				<div className="header">
					You must repair the blockchain before adding another block
				</div>
			</div>
		);
	}
	renderBlockErrorModal() {
		if (this.state.showModal === true) {
			return (
				<div>
					<Modal content={this.renderError()} toggle={this.closeModal} />
				</div>
			);
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
				<div className="item">BlockChain Demo</div>
				<button
					className="ui black button"
					onClick={() => {
						this.props.addPeer();
					}}>
					Add a Peer
				</button>
				<button
					className="ui black button"
					onClick={() => {
						for (let i = 0; i < peers.length; i++) {
							if (peers[i].connected === true) {
								if (flag === true) {
									this.props.addBlock(blockCount, peers[i], 'data');
								} else {
									this.setState({ showModal: true });
								}
							}
						}
						blockCount++;
					}}>
					{this.renderBlockErrorModal()}
					Add a Block
				</button>
				<button
					className="ui black button"
					onClick={() => {
						this.props.reset();
					}}>
					Reset
				</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { peers: state.peers };
};
export default connect(mapStateToProps, { reset, addPeer, addBlock })(Header);

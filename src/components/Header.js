import React from 'react';
import { connect } from 'react-redux';
import { addPeer, addBlock, reset } from '../actions';
class Header extends React.Component {
	render() {
		let blockCount = this.props.peers[0].blockchain.length;
		console.log(blockCount);
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
						this.props.addBlock(blockCount, 'data');
						blockCount++;
					}}>
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

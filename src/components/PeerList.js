import React from 'react';
import { connect } from 'react-redux';
import { fetchPeers, removePeer, addBlock, setConnect } from '../actions';
import BlockChain from './BlockChain';
import './PeerList.css';
class PeerList extends React.Component {
	renderAdmin(peer) {
		if (peer.name !== 'satoshi') {
			return (
				<div>
					<i
						className="right floated close icon small"
						onClick={() => {
							this.props.removePeer(peer);
						}}
					/>
					<i
						className="right floated linkify icon small"
						onClick={() => {
							console.log('hello');
							this.props.setConnect(peer);
						}}
					/>
				</div>
			);
		}
	}
	renderList() {
		return this.props.peers.map((peer) => {
			return (
				<div key={peer.id} className="item">
					<div className="ui grid">
						<div className="three wide column">
							<div
								className={`ui ${
									peer.connected === true ? 'green' : 'red'
								} card`}>
								{this.renderAdmin(peer)}
								<div className="center aligned content">
									<i className="user circle icon large" />
									<div>{peer.name}</div>
								</div>
							</div>
						</div>
						<div className="thirteen wide column">
							<BlockChain currentPeer={peer} />
						</div>
					</div>
				</div>
			);
		});
	}
	render() {
		return <div className="ui divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { peers: state.peers };
};

export default connect(mapStateToProps, {
	fetchPeers,
	removePeer,
	addBlock,
	setConnect,
})(PeerList);

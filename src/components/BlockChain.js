import React from 'react';
import Block from './Block';
import './PeerList.css';
class BlockChain extends React.Component {
	renderLink() {
		return <i className="angle double left icon" />;
	}
	renderList() {
		console.log(this.props.currentPeer.blockchain);
		return this.props.currentPeer.blockchain.map((block) => {
			console.log(block);
			return (
				<div
					className="ui horizontal list"
					key={
						this.props.currentPeer.blockchain[
							this.props.currentPeer.blockchain.indexOf(block)
						].hash
					}>
					<div className="item">
						<Block currentBlock={block} />
					</div>
					<div className="item">{this.renderLink()}</div>
				</div>
			);
		});
	}
	render() {
		return <div>{this.renderList()}</div>;
	}
}

export default BlockChain;

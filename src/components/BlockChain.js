import React from 'react';
import Block from './Block';

class BlockChain extends React.Component {
	renderLink() {
		return <i className="angle double left icon" />;
	}
	renderList() {
		return this.props.currentPeer.blockchain.map((block) => {
			return (
				<div
					className="ui horizontal list"
					key={this.props.currentPeer.blockchain.indexOf(block)}>
					<div className="item">
						<Block currentPeer={this.props.currentPeer} currentBlock={block} />
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

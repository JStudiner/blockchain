import React from 'react';
import Modal from '../Modal';
class Block extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
	}
	renderActions() {
		return <i className="ui right floated close icon" />;
	}
	renderInfo() {
		if (this.state.clicked === true) {
			console.log('wtf');
			return (
				<div>
					<Modal
						title={`Hash: ${this.props.currentBlock.hash}`}
						content={`Previous Hash: ${this.props.currentBlock.previousHash}`}
						actions={this.renderActions()}
					/>
				</div>
			);
		}
	}
	render() {
		return (
			<div>
				<i
					onClick={() => {
						console.log('hello');
						this.setState({ clicked: true });
					}}
					className="cube icon large"
				/>
				{this.renderInfo()}
			</div>
		);
	}
}

export default Block;

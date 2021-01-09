import React from 'react';
import Modal from '../Modal';
import '../Modal.css';
import './Block.css';
import { connect } from 'react-redux';
import { change, checkConnect, checkChain, mine } from '../actions';
class Block extends React.Component {
	constructor(props) {
		super(props);
		this.state = { toggleModal: false, value: this.props.currentBlock.data };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	toggleModal = () => {
		this.setState((prevState) => ({ toggleModal: !prevState.toggleModal }));
	};
	handleChange(e) {
		this.setState({ value: e.target.value });
	}
	handleSubmit() {
		this.props.change(
			this.props.currentPeer,
			this.props.currentBlock,
			this.state.value
		);
		this.props.checkChain(this.props.currentPeer.id);
		this.props.checkConnect(this.props.currentPeer.id);
	}

	renderBlockInfo() {
		return (
			<div className="ui container">
				<div className="ui top attached label">
					Block Info{this.renderActions()}
				</div>
				<form onSubmit={this.onSubmit} className="ui form block-comps">
					<div className="field">
						<label>Hash: </label>
						<div className="container">{this.props.currentBlock.hash}</div>
					</div>
					<div className="field">
						<label>Previous Hash: </label>
						<div className="container">
							{this.props.currentBlock.previousHash}
						</div>
					</div>
					<div className="field">
						<label>Data: </label>
						<textarea
							value={this.state.value}
							onChange={(e) => {
								this.handleChange(e);
							}}
							rows="3"></textarea>
					</div>
					<div onClick={this.handleSubmit} className="ui submit button">
						Submit
					</div>
					<div
						className={`ui ${
							this.props.currentBlock.valid === false ? 'negative' : 'positive'
						} button`}
						onClick={() => {
							this.props.mine(
								this.props.currentPeer.id,
								this.props.currentBlock
							);
							this.props.checkChain(this.props.currentPeer.id);
						}}>
						Mine
					</div>
				</form>
			</div>
		);
	}
	renderActions() {
		return (
			<i
				onClick={() => {
					this.toggleModal();
				}}
				className="ui close icon close-x"></i>
		);
	}
	renderInfo() {
		if (this.state.toggleModal === true) {
			return (
				<div>
					<Modal content={this.renderBlockInfo()} toggle={this.toggleModal} />
				</div>
			);
		}
	}
	render() {
		const colors = ['block-green', 'block-red'];
		return (
			<div className="position: relative;">
				<i
					onClick={() => {
						this.toggleModal();
					}}
					className={`cube icon large ${
						this.props.currentBlock.valid === true ? colors[0] : colors[1]
					}`}
				/>
				{this.renderInfo()}
			</div>
		);
	}
}

export default connect(null, { change, checkConnect, checkChain, mine })(Block);

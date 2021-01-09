import React from 'react';
import '../Modal.css';
class InfoPage extends React.Component {
	render() {
		return (
			<div className="ui container block-comps">
				<div className="ui divided list">
					<div className="item">
						<h3 className="header">Peer system</h3>
						<div className="ui list">
							<div className="item">
								<i className="user circle icon"></i>
								<div className="content">
									<div>
										Click the "Add a Peer" button to add a peer to the network.
									</div>
								</div>
							</div>
							<div className="item">
								<i className="linkify icon"></i>
								<div className="content">
									<div>
										Each peer will have a link icon. Press this to toggle
										linking the peer to the blockchain. A green bottom border
										indicates that a peer is connected while red indicates
										unconnected.
									</div>
								</div>
							</div>
							<div className="item">
								<i className="close icon"></i>
								<div className="content">
									<div>Click the x to delete a peer from the network.</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<h3 classNameName="header">Block</h3>
						<div className="ui list">
							<div className="item">
								<i className="cube icon"></i>
								<div className="content">
									Clicking the "Add a Block" button will add a block to the
									blockchain. Each peer that is connected will displayed a copy
									of the blockchain.
								</div>
							</div>
							<div
								className="item"
								style={{ display: 'flex', flexDirection: 'row' }}>
								<div
									style={{
										marginleft: '0px',
										marginRight: '5px',
										display: 'flex',
										flexDirection: 'column',
									}}>
									<i className="cube icon" style={{ color: 'red' }}></i>
									<i className="cube icon" style={{ color: 'green' }}></i>
								</div>
								<div className="content">
									If the block is valid, (The data hasn't been changed and
									previous hash matches the hash of the block directly before),
									the block will be green. If these conditions are not met the
									block will be red.
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<h3 style={{ marginBottom: '0px' }}>Block Info</h3>
						<div className="ui list">
							<div className="item">
								<div className="content">
									Click a <i className="cube icon"></i> icon to see information
									about the block you clicked
								</div>
							</div>
							<div className="item">
								<div className="header">Hash</div>
								<div className="content">
									The hash is calculated with the SHA256 algorithim and uses the
									data, index, previous hash and timestamp.
								</div>
							</div>
							<div className="item">
								<div className="header">Previous Hash</div>
								<div className="content">
									The previous hash is the hash of the block directly before the
									current block in the blockchain.
								</div>
							</div>
							<div className="item">
								<div className="header">Data</div>
								<div className="content">
									The data of each block can be changed by editing the text and
									clicking the{' '}
									<button className="ui tiny button">Submit</button> button.
									Changing the data will make the current block and all blocks
									after invalid. The blocks will indicated this by turning red.
								</div>
							</div>
							<div className="item">
								<div className="header">Mining</div>
								<div className="content">
									When a block is invalid the{' '}
									<button className="ui tiny positive button">Mine</button>{' '}
									button will turn red{' '}
									<button className="ui tiny negative button">Mine</button>,
									indicating the block must be mined. The blocks must be mined
									in order to become valid.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default InfoPage;

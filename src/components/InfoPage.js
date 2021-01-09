import React from 'react';
import '../Modal.css';
class InfoPage extends React.Component {
	render() {
		const style = {};
		return (
			<div className="ui container block-comps">
				<div class="ui divided list">
					<div class="item">
						<h3 className="header">Peer system</h3>
						<div class="ui list">
							<div class="item">
								<i class="user circle icon"></i>
								<div class="content">
									<div>
										Click the "Add a Peer" button to add a peer to the network.
									</div>
								</div>
							</div>
							<div class="item">
								<i class="linkify icon"></i>
								<div class="content">
									<div>
										Each peer will have a link icon. Press this to toggle
										linking the peer to the blockchain. A green bottom border
										indicates that a peer is connected while red indicates
										unconnected.
									</div>
								</div>
							</div>
							<div class="item">
								<i class="close icon"></i>
								<div class="content">
									<div>Click the x to delete a peer from the network.</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<h3 className="header">Block</h3>
						<div class="ui list">
							<div class="item">
								<i class="cube icon"></i>
								<div class="content">
									Clicking the "Add a Block" button will add a block to the
									blockchain. Each peer that is connected will displayed a copy
									of the blockchain.
								</div>
							</div>
							<div
								class="item"
								style={{ display: 'flex', flexDirection: 'row' }}>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<i class="cube icon" style={{ color: 'red' }}></i>
									<i class="cube icon" style={{ color: 'green' }}></i>
								</div>
								<div class="content">
									If the block is valid, (The data hasn't been changed and
									previous hash matches the hash of the block directly before),
									the block will be green. If these conditions are not met the
									block will be red.
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<h3 style={{ marginBottom: '0px' }}>Block Info</h3>
						<div class="ui list">
							<div class="item">
								<div class="content">
									Click a <i class="cube icon"></i> icon to see information
									about the block you clicked
								</div>
							</div>
							<div class="item">
								<div class="header">Hash</div>
								<div class="content">
									The hash is calculated with the SHA256 algorithim and uses the
									data, index, previous hash and timestamp.
								</div>
							</div>
							<div class="item">
								<div class="header">Previous Hash</div>
								<div class="content">
									The previous hash is the hash of the block directly before the
									current block in the blockchain.
								</div>
							</div>
							<div class="item">
								<div class="header">Data</div>
								<div class="content">
									The data of each block can be changed by editing the text and
									clicking the <button class="ui tiny button">Submit</button>{' '}
									button. Changing the data will make the current block and all
									blocks after invalid. The blocks will indicated this by
									turning red.
								</div>
							</div>
							<div class="item">
								<div class="header">Mining</div>
								<div class="content">
									When a block is invalid the{' '}
									<button class="ui tiny positive button">Mine</button> button
									will turn red{' '}
									<button class="ui tiny negative button">Mine</button>,
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

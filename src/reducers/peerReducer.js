const SHA256 = require('crypto-js/sha256');
class Block {
	constructor(index, timestamp, data, previousHash = ' ') {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
	}
	calculateHash() {
		return SHA256(
			this.index +
				this.previousHash +
				this.timestamp +
				JSON.stringify(this.data)
		).toString();
	}
}
function isChainValid() {
	for (let i = 1; i < this.chain.length; i++) {
		const currentBlock = this.chain[i];
		const previousBlock = this.chain[i - 1];
		if (currentBlock.hash !== currentBlock.calculateHash()) {
			return false;
		}
		if (currentBlock.previousHash !== previousBlock.hash) {
			return false;
		}
	}
	return true;
}
function createGenesisBlock() {
	return new Block(0, '01/05/20', 'Genesis block', '0');
}

let initialState = [
	{ name: 'satoshi', id: 0, blockchain: [], connected: true },
];

const peerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RESET':
			initialState[0].blockchain = [];
			return [...initialState];
		case 'ADD_PEER':
			const newObj = {
				name: action.payload.name,
				id: action.payload.id,
				blockchain: [],
				connected: false,
			};
			return [...state, newObj];
		case 'FETCH_PEERS':
			return [...state];
		case 'REMOVE_PEER':
			console.log(action.payload);
			return state.filter((peers) => peers !== action.payload);
		case 'CONNECT':
			const i = state.indexOf(action.payload.peer);
			state[i].connected = !state[i].connected;
			if (state[i].connected === true) {
				state[i].blockchain = state[0].blockchain;
			} else {
				state[i].blockchain = [];
			}
			return [...state];
		case 'ADD_BLOCK':
			const date = Date.now();
			let newBlock = '';
			console.log(action.count);
			if (action.payload.count !== 0) {
				newBlock = new Block(
					action.payload.count,
					date,
					action.payload.data,
					state[0].blockchain[action.payload.count - 1].hash
				);
			} else {
				newBlock = createGenesisBlock();
				console.log(newBlock);
			}
			state[0].blockchain.push(newBlock);
			console.log(state);
			return [...state];

		default:
			return [...state];
	}
};
export default peerReducer;

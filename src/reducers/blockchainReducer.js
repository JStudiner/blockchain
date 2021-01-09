const SHA256 = require('crypto-js/sha256');
class Block {
	constructor(index, timestamp, data, previousHash = ' ') {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.valid = true;
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
function bugCalculateHash(block) {
	return SHA256(
		block.index +
			block.previousHash +
			block.timestamp +
			JSON.stringify(block.data)
	).toString();
}
function isBlockValid(block, previousBlock) {
	if (block.hash !== bugCalculateHash(block)) {
		return false;
	}
	if (block.index !== 0) {
		if (block.previousHash !== bugCalculateHash(previousBlock)) {
			return false;
		}
	}

	return true;
}
function createGenesisBlock() {
	return new Block(0, '01/05/20', 'Genesis block', '0');
}

const blockchainReducer = (state = [], action) => {
	let id = 0;
	switch (action.type) {
		case 'ADD_BLOCK':
			let block = null;
			const date = Date.now();
			if (action.payload.blockId !== 0) {
				block = new Block(
					action.payload.blockId,
					date,
					action.payload.data,
					state[action.payload.blockId - 1].hash
				);
			} else {
				block = createGenesisBlock();
			}
			return [...state, block];
		case 'CHANGE_BLOCK':
			const { changedBlock, blockData } = action.payload;
			id = state.indexOf(changedBlock);
			return [
				...state.slice(0, id),
				{ ...state[id], data: blockData },
				...state.slice(id + 1),
			];
		case 'CHECK_CHAIN':
			let value = true;
			const newArray = [];
			for (let i = 0; i < state.length; i++) {
				if (i === 0) {
					value = isBlockValid(state[0], null);
				} else {
					value = isBlockValid(state[i], state[i - 1]);
				}
				newArray[i] = value;
				if (newArray[i] === false) {
					for (let y = i; y < state.length; y++) {
						newArray[y] = false;
					}
					break;
				}
			}
			return state.map((block, index) => {
				return { ...block, valid: newArray[index] };
			});
		case 'MINE':
			id = state.indexOf(action.block);
			if (id !== 0) {
				state = [
					...state.slice(0, id),
					{
						...state[id],
						previousHash: state[id - 1].hash,
					},
					...state.slice(id + 1),
				];
			}
			return [
				...state.slice(0, id),
				{
					...state[id],
					hash: bugCalculateHash(state[id]),
				},
				...state.slice(id + 1),
			];

		default:
			return state;
	}
};
export default blockchainReducer;

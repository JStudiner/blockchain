import { uniqueNamesGenerator, names } from 'unique-names-generator';

export const fetchPeers = () => {
	return {
		type: 'FETCH_PEERS',
	};
};
export const addPeer = (peerCount) => {
	return {
		type: 'ADD_PEER',
		payload: {
			name: uniqueNamesGenerator({ dictionaries: [names] }),
			id: `peer${peerCount + 1}`,
		},
	};
};
export const removePeer = (peer) => {
	return {
		type: 'REMOVE_PEER',
		payload: peer,
	};
};
export const addBlock = (blockId, peer, data) => {
	return {
		type: 'ADD_BLOCK',
		payload: {
			blockId,
			peer,
			data,
		},
	};
};

export const checkConnect = (peerId) => {
	return {
		type: 'CHECK_CONNECT',
		payload: peerId,
	};
};

export const setConnect = (peer) => {
	return {
		type: 'CONNECT',
		payload: {
			peer: peer,
		},
	};
};

export const reset = () => {
	return {
		type: 'RESET',
	};
};

export const change = (peer, changedBlock, blockData) => {
	return {
		type: 'CHANGE_BLOCK',
		payload: {
			changedBlock,
			peer,
			blockData,
		},
	};
};

export const checkChain = (peerId) => {
	return {
		type: 'CHECK_CHAIN',
		payload: {
			peerId,
		},
	};
};
export const mine = (peerId, block) => {
	return {
		type: 'MINE',
		block,
		peerId,
	};
};

const namesToChoose = [
	'Bette',
	'Letty',
	'Remona',
	'Lily',
	'Maryanna',
	'Terica',
	'Meridith',
	'Coletta',
	'Dierdre ',
	'Chrystal ',
	'Mitsuko',
	'Haley ',
	'Amberly',
	'Kristan',
	'Cristin',
	'Jennette',
	'Pinkie ',
	'Marcella ',
	'Erasmo',
	'Tamie',
	'Elodia',
	'Tonisha',
	'Sherell ',
	'Curt',
	'Dina',
	'Loyce',
	'Melda',
	'Barbera',
	'Jenifer',
	'Delia',
];
let count = 0;
export const fetchPeers = () => {
	return {
		type: 'FETCH_PEERS',
	};
};
export const addPeer = () => {
	count++;
	return {
		type: 'ADD_PEER',
		payload: { name: namesToChoose[count - 1], id: `peer${count}` },
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

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
		payload: { name: namesToChoose[count - 1], id: count },
	};
};
export const removePeer = (peer) => {
	return {
		type: 'REMOVE_PEER',
		payload: peer,
	};
};
export const addBlock = (blockCount, data) => {
	return {
		type: 'ADD_BLOCK',
		payload: {
			count: blockCount,
			data: data,
		},
	};
};

export const setConnect = (peer) => {
	console.log('fuck');
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

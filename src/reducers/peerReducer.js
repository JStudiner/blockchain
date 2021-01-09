import blockchainReducer from './blockchainReducer';
const initialState = [
	{ name: 'satoshi', id: 'peer0', blockchain: [], connected: true },
];
function findWithAttr(array, value) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].id === value) {
			return i;
		}
	}
	return -1;
}
const peerReducer = (state = initialState, action) => {
	var id = 0;
	switch (action.type) {
		case 'RESET':
			return [...initialState];
		case 'ADD_PEER':
			const newObj = {
				name: action.payload.name,
				id: action.payload.id,
				blockchain: [],
				connected: false,
			};
			return [...state, newObj];

		case 'REMOVE_PEER':
			return state.filter((peers) => peers !== action.payload);
		case 'CONNECT':
			id = state.indexOf(action.payload.peer);
			const changed = !state[id].connected;
			let newState = [
				...state.slice(0, id),
				{ ...state[id], connected: changed },
				...state.slice(id + 1),
			];
			if (changed === true) {
				newState = [
					...newState.slice(0, id),
					{ ...newState[id], blockchain: newState[0].blockchain },
					...newState.slice(id + 1),
				];
			}
			return newState;
		case 'ADD_BLOCK':
			id = state.indexOf(action.payload.peer);
			return [
				...state.slice(0, id),
				{
					...state[id],
					blockchain: blockchainReducer(state[id].blockchain, action),
				},
				...state.slice(id + 1),
			];
		case 'CHANGE_BLOCK':
			console.log();
			id = state.indexOf(action.payload.peer);
			return [
				...state.slice(0, id),
				{
					...state[id],
					blockchain: blockchainReducer(state[id].blockchain, action),
				},
				...state.slice(id + 1),
			];
		case 'CHECK_CHAIN':
			id = findWithAttr(state, action.payload.peerId);
			console.log(state[id]);
			return [
				...state.slice(0, id),
				{
					...state[id],
					blockchain: blockchainReducer(state[id].blockchain, action),
				},
				...state.slice(id + 1),
			];
		case 'CHECK_CONNECT':
			id = findWithAttr(state, action.payload);
			if (state[id] !== state[0]) {
				return [
					...state.slice(0, id),
					{ ...state[id], connected: false },
					...state.slice(id + 1),
				];
			}
			return [...state];
		case 'MINE':
			id = findWithAttr(state, action.peerId);
			return [
				...state.slice(0, id),
				{
					...state[id],
					blockchain: blockchainReducer(state[id].blockchain, action),
				},
				...state.slice(id + 1),
			];
		default:
			return state;
	}
};
export default peerReducer;

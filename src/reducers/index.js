import { combineReducers } from 'redux';
import peerReducer from './peerReducer';

export default combineReducers({
	peers: peerReducer,
});

import React from 'react';
import Header from './Header';
import PeerList from './PeerList';
class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<PeerList />
			</div>
		);
	}
}
export default App;

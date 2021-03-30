import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GuestHomepage from './components/GuestHomepage/GuestHomepage';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<>
			<Header />
			<GuestHomepage />
			{/* <Switch>
				<Route>

				</Route>
			</Switch> */}

			<Footer />
		</>
	);
}

export default App;
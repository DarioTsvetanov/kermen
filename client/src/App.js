import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import GuestHomepage from './components/GuestHomepage/GuestHomepage';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<>
			<Header />

			<Switch>
				<Route path="/" exact component={GuestHomepage}/>
				<Route path="/register" exact component={Register}/>
			</Switch>
			
			<Footer />
		</>
	);
}

export default App;
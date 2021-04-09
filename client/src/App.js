import { useState, useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import { auth } from './utils/firebase';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import GuestHomepage from './components/GuestHomepage/GuestHomepage';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((setUser))
	}, []);

	const authInfo = {
		isAuthenticated: Boolean(user),
		username: user?.email
	}

	return (
		<>
			<AuthContext.Provider value={authInfo}>
				<Header />

				<Switch>
					<Route path="/" exact component={GuestHomepage} />
					<Route path="/register" exact component={Register} />
					<Route path="/login" exact component={Login} />
					<Route path="/create" exact component={CreateProduct} />
					<Route path="/flowers/:flowerId/details" exact component={Details} />
					<Route path="/flowers/:flowerId/edit" exact component={Edit} />
					<Route path="/logout" render={(props) => {
						auth.signOut();
						return <Redirect to="/" />
					}} />
				</Switch>
				<Footer />

			</AuthContext.Provider>
		</>
	);
}

export default App;
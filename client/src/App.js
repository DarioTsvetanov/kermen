import { Switch, Route } from 'react-router-dom';

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
	return (
		<>
			<Header />

			<Switch>
				<Route path="/" exact component={GuestHomepage}/>
				<Route path="/register" exact component={Register}/>
				<Route path="/login" exact component={Login}/>
				<Route path="/create" exact component={CreateProduct}/>
				<Route path="/flowers/:flowerId/details" exact component={Details}/>
				<Route path="/flowers/:flowerId/edit" exact component={Edit}/>
			</Switch>
			
			<Footer />
		</>
	);
}

export default App;
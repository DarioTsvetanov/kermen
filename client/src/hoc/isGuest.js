import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

const isGuest = (WrappedComponent) => {
    const Component = (props) => {
        const { isAuthenticated } = useContext(AuthContext);
        const history = useHistory();

        if (isAuthenticated) {
            history.push('/');

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
}

export default isGuest;
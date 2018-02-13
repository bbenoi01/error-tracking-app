import { connect } from 'react-redux';
import App from '../app';

function mapStoreToProps(store) {
    return {
        errors: store.app.errors,
        users: store.app.users
    }
}

export default connect(mapStoreToProps)(App);
import { connect } from 'react-redux';
import Details from '../components/details';

function mapStoreToProps(store) {
    return {
        errors: store.app.errors,
        users: store.app.users
    }
}

export default connect(mapStoreToProps)(Details);
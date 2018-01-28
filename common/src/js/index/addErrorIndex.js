import { connect } from 'react-redux';
import AddError from '../components/addError';

function mapStoreToProps(store) {
    return {
        errorType: store.addError.errorType
    }
}

export default connect(mapStoreToProps)(AddError);
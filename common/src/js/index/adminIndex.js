import { connect } from 'react-redux';
import Admin from '../components/admin';

function mapStoreToProps(store) {
    return {
        employeeType: store.admin.employeeType,
        employeeId: store.admin.employeeId,
        firstName: store.admin.firstName,
        lastName: store.admin.lastName
    }
}

export default connect(mapStoreToProps)(Admin);
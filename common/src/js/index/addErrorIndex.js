import { connect } from 'react-redux';
import AddError from '../components/addError';

function mapStoreToProps(store) {
    return {
        errorType: store.addError.errorType,
        issue: store.addError.issue,
        employeeName: store.addError.employeeName,
        approvingManager: store.addError.approvingManager,
        transactionDate: store.addError.transactionDate,
        orderNumber: store.addError.orderNumber,
        sku: store.addError.sku,
        installmentAgreement: store.addError.installmentAgreement,
        notes: store.addError.notes
    }
}

export default connect(mapStoreToProps)(AddError);
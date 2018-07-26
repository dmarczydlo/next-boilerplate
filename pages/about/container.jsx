import {connect} from 'react-redux';
import Page from './about';

const mapStateToProps = (state) => {
    const {users} = state;
    return users;
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

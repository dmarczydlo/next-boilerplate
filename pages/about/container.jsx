import {connect} from 'react-redux';
import Page from './about';
import {fetchUsers} from '../../actions/user';

const mapStateToProps = (state) => {
    const {users} = state;
    return users;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

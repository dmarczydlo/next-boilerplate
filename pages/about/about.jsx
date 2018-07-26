import React, {Component, Fragment} from 'react';
import {fetchUsers} from "../../actions/user";

export default class About extends Component {

    static  getInitialProps = async ({store, isServer}) => {
        store.dispatch(fetchUsers());

        return {
            isServer
        };
    };

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        const {data} = this.props;
        return (
            <Fragment>
                <h1>{'About'}</h1>
                <div>
                    {data && data.map((user) => (<div key={user.id}>{user.name}</div>))}
                </div>
            </Fragment>
        );
    }
}

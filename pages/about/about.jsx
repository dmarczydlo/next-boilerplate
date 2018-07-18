import React, {Component, Fragment} from 'react';
import Layout from '../../components/layout';
import {fetchUsers} from "../../actions/user";

export default class About extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const {data} = this.props;
        return (
            <Layout>
                <Fragment>
                    <h1>{'About'}</h1>
                    <div>
                        {data && data.map((user) => (<div key={user.id}>{user.name}</div>))}
                    </div>
                </Fragment>
            </Layout>
        );
    }
}

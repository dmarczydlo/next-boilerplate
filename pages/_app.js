import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";

import reducers from '../reducers';
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";


const makeStore = (initialState) => {
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);

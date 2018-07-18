import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import "../../style/index.scss";

const Index = ({children}) => {
    return (
        <Fragment>
            <Header />
            <Fragment>
                {children}
            </Fragment>
            <Footer />
        </Fragment>
    );
};

Index.propTypes = {
    children: PropTypes.element.isRequired
};

export default Index;

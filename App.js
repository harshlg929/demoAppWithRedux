import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/reducers/index';
import Routes from './src/components/routes';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

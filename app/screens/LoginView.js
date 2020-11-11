import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';
import APIKit, { setClientToken } from '../utils/APIKit';

const initState = {
    username: '',
    password: '',
    errors: {},
    isAuthorized: false,
    isLoading: false,
};

class Login extends Component {
    state = initState;

    componentWillUnmount() {}

    onUsernameChange = username => {
        this.setState({ username });
    };

    onPasswordChange = password => {
        this.setState({ password });
    };

    onPressLogin() {
        const { username, password } = this.state;
        const payload = { username, password };
        console.log(payload);
        
        const onSuccess = ({ data }) => {
            setClientToken(data.token);
            this.setState({
                isLoading: false,
                isAuthorized: true
            });
        };
        
        const onFailure = error => {
            console.log(error && error.response);
            this.setState({
                errors: error.response.data,
                isLoading: false
            })
        }
        this.setState({ isLoading: true });

        APIKit.post('/api-token-auth/', payload)
        .then(onSuccess)
        .catch(onFailure);
    }

}
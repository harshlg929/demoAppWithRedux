import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../actions/actionsTypes';
import { login, signup } from './../../actions/actions';
import styles from './../../../styles/style';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <Button
                    onPress={() => { this.props.login("harsh") }}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase Count"
                />
                <Text>{this.props.name}</Text>
                <Text>{this.props.count}</Text>

                <Button
                    onPress={this.props.signup}
                    title="Decrease Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("Profile");
                }}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = (state) => ({
    count: state.reducer.count,
    name: state.reducer.name
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data)),
    signup: () => dispatch(signup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
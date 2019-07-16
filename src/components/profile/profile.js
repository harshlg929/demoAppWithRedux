import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './../../../styles/style';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("Home");
                }}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


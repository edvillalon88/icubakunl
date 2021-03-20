
import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
});

export default class Loading extends React.Component {
    static KEY_LOGGED_IN_USER = 'loggedInUser';

    constructor(props) {
        super(props);
        this.navigateAsync = this.navigateAsync.bind(this);
        this.navigateAsync();
    }

    async navigateAsync() {
      Loading.isLoggedIn().then(() => {
            this.props.navigation.navigate('App');
        }, () => {
            this.props.navigation.navigate('Auth');
        });
    }

    static isLoggedIn() {
        return new Promise(((resolve, reject) => {
            AsyncStorage.getItem(Loading.KEY_LOGGED_IN_USER, (exception, userObj) => {
                if (userObj) {
                    resolve(userObj);
                }
                reject(userObj);
            });
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
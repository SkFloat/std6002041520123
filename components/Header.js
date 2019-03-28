//import
import React, { Component } from 'react';
import { View, Text } from 'react-native';
//write

class Header extends Component {
render() {
    return (
        //com
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
            );
        }
    }
//style
const styles = {
    header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#66FFCC'
    },
    text: {
        fontSize: 40,
        color: '#000000'
    }
}    
//Export
export default Header;
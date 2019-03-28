//import
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardSection from './CardSection';
//write

class Card extends Component {
render() {
    return (
        //com
            <View style={styles.body}>
                <CardSection />
                <CardSection />
                <CardSection />
            </View>
            );
        }
    }
//style
const styles = {
    body: {
        alignItems: 'center'
    }
}    
//Export
export default Card;
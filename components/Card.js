//import
import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';
//write

class Card extends Component {
render() {
    return (
        //com
            <View>

                <CardSection>
                    <View style={{ flexDirection: 'row', margin: 10}}>
                        <Image 
                            style={{ width: 80, height: 80}}
                            source={{ uri: 'https://bit.ly/2FxQbnP'}}>
                        </Image>
                    
                        <View style={{ maginTop: 20, marginLeft: 10}}>
                            <Text>เพลง หนูติด F </Text>
                            <Text>ขับร้องโดย น้องหลิว TCT </Text>
                        </View>
                    </View>
                </CardSection>

                <CardSection>
                <Image 
                    style={{ height: 300, margin: 10 }}
                    source={{ uri: 'https://images.unsplash.com/photo-1534983283799-b12a2ad6b1a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'}}></Image>
                </CardSection>

                <CardSection>
                <View style={styles.button}> 
                    <View style={{ width: 150}}>
                    <Button title="Buy" />
                    </View>
                </View>
                </CardSection>

            </View>
            );
        }
    }
//style
const styles = {
    button: {
        alignItems: 'center', 
        justtifyContent: 'center', 
        margin: 10
    }
}    
//Export
export default Card;
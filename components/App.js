//import
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card  from './Card';

//import Header from '.Header';
//write
class App extends React.Component {
render() {
    return (
        //com
            <View>
                <Header title="Albums" />
                <Card />
            </View>
            );                        
        }       
    }
//Export
export default App;
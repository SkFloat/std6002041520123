//import
import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
//import Header from '.Header';
//write
class App extends React.Component {
render() {
    return (
        //com
            <View>
                <Header title="Albums" />
            <   Text style={{ fontSize: 20}}>Saran kuttchanant</Text>
            </View>
            );
        }       
    }
//Export
export default App;
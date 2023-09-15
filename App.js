import React from 'react';
import {Text, View} from 'react-native';

export default function AboutMe(){
    return(
        <View style ={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Ankit Gurung</Text>
            <Text>301369705</Text>
        </View>
    );
}
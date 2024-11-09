import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
    return (
        <View style={{padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-around',alignItems: 'stretch', marginHorizontal: "auto"}}>
            <View
                style={{
                    backgroundColor: 'red',
                    // width: 100,
                    // height: 100,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'blue',
                    // width: 100,
                    // height: 100,
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>2</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'green',
                    // width: 100,
                    // height: 100,
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>3</Text>
            </View>
        </View>
    );
}


// REACT NATIVE FLEXBOX
// if it's row the main aix will be from left to right and viceversa if it's row reverse
// main axis will be from top to bottom

// when flexdirection is row.. setting alignitems property is telling the items or child to stretch along or space it should take along the main axis
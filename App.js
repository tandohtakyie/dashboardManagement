
import React from 'react';
import Area from './src/Area';
import Line from './src/Line';
import Pie from './src/Pie'
import { ScrollView } from 'react-native';

const App = () => {
    return (
    <ScrollView>
        <Area />
        <Line />
        <Pie/>
    </ScrollView>
    );
};


export default App;
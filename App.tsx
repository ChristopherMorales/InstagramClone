import React from "react";
import { View, Text } from "react-native";
import colors from './src/theme/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style= {{color: colors.primary}}>
        Hello Bitch
        <Icon name ="stepforward" size={20}/>
      </Text>
    </View>
  );
};

export default App;
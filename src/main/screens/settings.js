import * as React from 'react';
import { Button, View, Text } from 'react-native';


function Settings({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings </Text>
        <Button title='Go to signUp' onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }

export default Settings;
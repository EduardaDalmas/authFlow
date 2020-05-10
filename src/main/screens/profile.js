import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Profile({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile </Text>
        <Button title='Go to Settings' onPress={() => navigation.navigate("Settings")} />
      </View>
    );
  }

  export default Profile;

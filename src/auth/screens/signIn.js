import * as React from 'react';
import { Button, View, Text } from 'react-native';

function SignIn({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignIn </Text>
        <Button title="Go to Profile" onPress={() => navigation.navigate("SignUp")} />
      </View>
    );
  }

  export default SignIn;
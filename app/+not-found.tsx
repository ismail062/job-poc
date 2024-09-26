import {  router, Stack } from 'expo-router';
import { View, StyleSheet,  } from 'react-native';
import { CustomButton } from '../components';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
      <FontAwesome5 name="skull-crossbones" size={30} color="red" className="mb-6" />
      <CustomButton
            title="Go back to homepage"
            handlePress={() => router.push("/")}
            containerStyles="w-full mt-2"
          />
      </View>
      
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

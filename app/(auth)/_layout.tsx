import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

function authLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
      </>
  )
}

export default authLayout
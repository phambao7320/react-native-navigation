import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import About from "./screens/about";
import Contact from "./screens/contact";

export type RootStackParamList = {
  Home: { result: string } | undefined;
  About: { name: string };
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome Home",
            headerTitleStyle: { color: "red" },
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{ name: "Guest" }}
        />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { useNavigation, useRoute } from "@react-navigation/native";

// Thich hop pass tu props
// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// type Props = NativeStackScreenProps<RootStackParamList, "About">;

// Hop voi moi navigation
type Props = NativeStackNavigationProp<RootStackParamList, "About">;

//

export default function About() {
  const { params } = useRoute();
  console.log(params);

  const { navigate } = useNavigation<Props>();

  return (
    <View style={styles.container}>
      <Text>About screen</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Home"
        onPress={() => navigate("Home", { result: "Data from about" })}
      />
    </View>
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

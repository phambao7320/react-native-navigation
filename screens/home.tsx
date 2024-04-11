import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

// type Props = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home({ route, navigation }: Props) {
  //   const navigation = useNavigation<Props>();
  const result = route.params?.result || "";

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate("About", { name: "Simon" })}
      />
      <StatusBar style="auto" />
      <Text>{result}</Text>
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

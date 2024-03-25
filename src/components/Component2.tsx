import { Button, Text, View } from "react-native";
import { hideGlobalModal } from "./Modal";

export const Component2 = () => {
  return (
    <View
      style={{
        height: 500,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 16 }}>Component 2</Text>
      <Button
        title="Close Component2"
        onPress={() => hideGlobalModal("Component2")}
      />
    </View>
  );
};

import { Button, Text, View } from "react-native";
import { hideGlobalModal, showGlobalModal } from "./Modal";
import { Component2 } from "./Component2";

export const Component1 = () => {
  return (
    <View
      style={{
        height: 200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 24 }}>Component 1</Text>
      <Button
        title="Open Component 2"
        onPress={() =>
          showGlobalModal({ Component: Component2, modalKey: "Component2" })
        }
      />
      <View style={{ height: 16 }} />
      <Button title="Close" onPress={() => hideGlobalModal("Component1")} />
    </View>
  );
};

import { Component1 } from "@/components/Component1";
import { showGlobalModal } from "@/components/Modal";
import { Button, Text, View } from "react-native";

export function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Abrir modal"
        onPress={() =>
          showGlobalModal({ Component: Component1, modalKey: "Component1" })
        }
      />
    </View>
  );
}

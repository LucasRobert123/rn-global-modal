import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { DeviceEventEmitter } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

import {
  GlobalModalProps,
  HIDE_GLOBAL_MODAL,
  Modal,
  SHOW_GLOBAL_MODAL,
} from "@/components/Modal";
import { Home } from "@/screens/Home";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modaProps, setModalProps] = useState<GlobalModalProps[]>([]);

  useEffect(() => {
    const showSub = DeviceEventEmitter.addListener(
      SHOW_GLOBAL_MODAL,
      (props: GlobalModalProps) => {
        setModalProps((state) => [...state, props]);
        setModalVisible(true);
      }
    );

    const hideSub = DeviceEventEmitter.addListener(
      HIDE_GLOBAL_MODAL,
      (modalKey: string) => {
        setModalProps((state) => {
          if (state.length === 1) setModalVisible(false);
          return state.filter((s) => s.modalKey !== modalKey);
        });
      }
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <>
      <StatusBar style="dark" translucent />
      <Home />
      <Modal visible={modalVisible}>
        {modaProps.slice(-1).map(({ modalKey, Component }) => (
          <Animated.View
            needsOffscreenAlphaCompositing
            entering={FadeIn.delay(200)}
            key={modalKey}
          >
            <Component />
          </Animated.View>
        ))}
      </Modal>
    </>
  );
}

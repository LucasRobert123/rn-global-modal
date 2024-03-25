import {
  DeviceEventEmitter,
  ModalProps,
  Modal as ModalRN,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

import { styles } from "./styles";

export const SHOW_GLOBAL_MODAL = "show_global_modal";
export const HIDE_GLOBAL_MODAL = "hide_global_modal";

export const showGlobalModal = (props: GlobalModalProps) => {
  DeviceEventEmitter.emit(SHOW_GLOBAL_MODAL, props);
};

export const hideGlobalModal = (modalKey: string) => {
  DeviceEventEmitter.emit(HIDE_GLOBAL_MODAL, modalKey);
};

export type GlobalModalProps = {
  modalKey: string;
  Component: React.FC;
};

type Props = ModalProps;

export const Modal = ({ children, ...props }: Props) => {
  return (
    <ModalRN animationType="fade" transparent {...props}>
      <View style={styles.overlay}>
        <Animated.View
          layout={LinearTransition}
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          style={styles.content}
        >
          {children}
        </Animated.View>
      </View>
    </ModalRN>
  );
};

import { buttonText } from "../labels";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      {({ pressed }) => (
        <Text style={[styles.text, pressed && styles.textPressed]}>
          {buttonText}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4338CA",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#3730A3",
    opacity: 0.9,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  textPressed: {
    color: "#e5e7eb",
  },
});

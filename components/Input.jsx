import { TextInput, StyleSheet } from "react-native";
import { placeholder } from "../labels";

export default function Input({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A0A0A5"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#E1DFEC",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#1E1B2E",
  },
});

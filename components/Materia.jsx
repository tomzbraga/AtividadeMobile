import { View, Text, StyleSheet } from "react-native";

export default function Materia({ nome }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.texto]}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  texto: {
    fontSize: 16,
    color: "#1C1C1E",
    flexShrink: 1,
  },
});

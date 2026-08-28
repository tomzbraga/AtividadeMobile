import { View, Text, StyleSheet } from "react-native";

export default function Materia({ nome }) {
  return (
    <View style={styles.container}>
      <View style={styles.acento} />
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems: "center" mantém a barra de acento e o texto alinhados
    // no mesmo eixo vertical, mesmo com nomes de disciplina mais longos.
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: "#1E1B2E",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  acento: {
    width: 4,
    height: 20,
    borderRadius: 2,
    backgroundColor: "#4338CA",
  },
  texto: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1E1B2E",
    flexShrink: 1,
  },
});

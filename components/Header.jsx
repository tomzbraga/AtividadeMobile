import { title, subtitle } from "../labels";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.acento} />
      <View>
        <Text style={styles.titulo}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // gap entre a barra de acento e o bloco de texto
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  acento: {
    width: 5,
    height: 40,
    borderRadius: 3,
    backgroundColor: "#4338CA",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1E1B2E",
    letterSpacing: -0.4,
  },
  subtitulo: {
    fontSize: 13,
    fontWeight: "500",
    color: "#6B6B76",
    marginTop: 2,
  },
});

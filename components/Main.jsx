import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { View, Text, StyleSheet } from "react-native";
import Materia from "./Materia";

export default function Main() {
  const [materias, setMaterias] = useState([]);
  const [text, setText] = useState("");

  function adicionaMateria(nome) {
    const nomeLimpo = nome.trim();

    if (nomeLimpo.length === 0) {
      return;
    }

    const novaMateria = {
      id: Date.now(),
      nome: nomeLimpo,
    };

    setMaterias((prev) => [...prev, novaMateria]);
    setText("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.inputWrapper}>
          <Input value={text} onChangeText={setText} />
        </View>
        <Button onPress={() => adicionaMateria(text)} />
      </View>
      {materias.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.vazioTexto}>Não há nenhuma matéria</Text>
        </View>
      ) : (
        <>
          <View style={styles.lista}>
            {materias.map((materia) => (
              <Materia key={materia.id} nome={materia.nome} />
            ))}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: "#F5F5F7",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 1,
  },
  botaoAdicionar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#34C759",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotaoAdicionar: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 26,
  },
  lista: {
    gap: 10,
  },
  vazioContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  vazioTexto: {
    fontSize: 16,
    color: "#8E8E93",
  },
});

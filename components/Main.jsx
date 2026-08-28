import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { View, Text, StyleSheet, Switch } from "react-native";
import Materia from "./Materia";
import { listTitle } from "../labels";

export default function Main() {
  const [materias, setMaterias] = useState([]);
  const [text, setText] = useState("");
  const [apenasObrigatorias, setApenasObrigatorias] = useState(false);

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
      <View style={styles.filtroRow}>
        <Text style={styles.filtroTexto}>Mostrar apenas obrigatórias</Text>
        <Switch
          value={apenasObrigatorias}
          onValueChange={setApenasObrigatorias}
          trackColor={{ false: "#D1D1D6", true: "#A5A0F5" }}
          thumbColor={apenasObrigatorias ? "#4338CA" : "#fff"}
        />
      </View>

      <Text style={styles.listaTitulo}>{listTitle}</Text>

      {materias.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.vazioEmoji}>📚</Text>
          <Text style={styles.vazioTexto}>Não há nenhuma matéria</Text>
        </View>
      ) : (
        <View style={styles.lista}>
          {materias.map((materia) => (
            <Materia key={materia.id} nome={materia.nome} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    // Sem backgroundColor aqui: o fundo já vem do App.js, então não
    // duplicamos a cor em dois lugares diferentes.
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  inputWrapper: {
    flex: 1,
  },
  filtroRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  filtroTexto: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3C3C43",
  },
  listaTitulo: {
    // Estilo "eyebrow": maiúsculo, pequeno e espaçado, com uma linha fina
    // por baixo — dá hierarquia ao título da lista sem competir com o
    // cabeçalho do app, que já é o elemento mais forte da tela.
    fontSize: 12,
    fontWeight: "700",
    color: "#4338CA",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    paddingBottom: 8,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E1DFEC",
  },
  lista: {
    // Sem gap aqui: o espaçamento entre os itens agora vem do
    // marginBottom de cada Materia, então não duplicamos o valor.
    paddingBottom: 24,
  },
  vazioContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
    paddingBottom: 24,
  },
  vazioEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  vazioTexto: {
    fontSize: 15,
    fontWeight: "500",
    color: "#8E8E93",
  },
});

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { View, Text, StyleSheet } from "react-native";

export default function Main() {
  const [materias, setMaterias] = useState([]);

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
  }

  return (
    <View>
      <Input />
      <>
        <Button />
      </>
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

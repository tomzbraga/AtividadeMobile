import { StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Header />
          <Main />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Fundo lavanda bem clara aplicado no nível mais alto, pra cobrir
    // inclusive a área segura (notch/status bar) com a mesma cor do app.
    backgroundColor: "#F4F3FA",
  },
  content: {
    flex: 1,
    // alignItems/justifyContent não centralizam mais o conteúdo: um
    // formulário + lista deve fluir de cima para baixo (início do eixo
    // principal), não ficar no meio da tela.
    width: "100%",
  },
});

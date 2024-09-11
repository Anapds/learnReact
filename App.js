import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function App() {
  const [base, setBase] = useState();
  const [altura, setAltura] = useState();
  const [area, setArea] = useState();

  function calcular(){
    if (base > 0 && altura > 0) {
        setArea((parseFloat(base) * parseFloat(altura)) / 2);
    } else {
      setArea("Valores de base e altura inválidos");
    }
  }
  return (
    <View style={styles.container}>
      <text>Insira os dados abaixo para calcular a área</text>
      <TextInput
        placeholder='Base'
        keyboardType='numeric'
        onChangeText={(b) => setBase()}
      />
      <TextInput
        placeholder='Altura'
        keyboardType='numeric'
        onChangeText={(a) => setAltura(a)}
      />
      <button
        title='calcular'
        onPress={calcular} />
        <text>{ area ? `resultado: ${area}` : ''}</text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

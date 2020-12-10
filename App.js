import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
// import {} from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.app}>
      <Text style={styles.legend}>Seu IMC</Text>

      <View>
        <Text style={styles.result}>25</Text>
        <Text style={styles.diganose}>Normal</Text>
      </View>

      <View>
        <TextInput style={styles.weight} placeholder="Peso" />
        <TextInput style={styles.height} placeholder="Altura" />
        <Button title="Calcular" style={styles.buttonCalc} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
  legend: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  result: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diganose: {
    textAlign: 'center',
    fontSize: 16,
  },
  weight: {
    borderColor: '#000',
    borderWidth: 1,
  },
  height: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonCalc: {
    marginTop: 20,
  },
});

export default App;

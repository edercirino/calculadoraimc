import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState('');
  const [legend, setLegend] = useState('inderteminado');
  const [color, setColor] = useState('#bdc3c7');

  const bmiCalc = () => {
    if (imc < 18.5) {
      setImc(weight / (height * height));
      setLegend('Magreza');
      setColor('#e74c3c');
    } else if (imc >= 18.5 && imc < 25) {
      setImc(weight / (height * height));
      setLegend('Normal');
      setColor('#2ecc71');
    } else if (imc >= 25 && imc < 30) {
      setImc(weight / (height * height));
      setLegend('Sobrepeso');
      setColor('#f1c40f');
    } else if (imc >= 30 && imc < 40) {
      setImc(weight / (height * height));
      setLegend('Obeso');
      setColor('#e67e22');
    } else {
      setImc(weight / (height * height));
      setLegend('Obesidade Grave');
      setColor('#e74c3c');
    }
  };

  return (
    <View style={styles.app}>
      <Text style={styles.legend}>Seu IMC</Text>

      <View style={[styles.panel, {backgroundColor: color}]}>
        <Text style={styles.result}>{Math.ceil(imc)}</Text>
        <Text style={styles.diganose}>{legend}</Text>
      </View>

      <View>
        <TextInput
          style={styles.weight}
          keyboardType="number-pad"
          onChangeText={setWeight}
          value={weight.toString().replace(',', '.')}
          label="Peso"
        />
        <TextInput
          style={styles.height}
          keyboardType="number-pad"
          onChangeText={setHeight}
          value={height.toString().replace(',', '.')}
          label="Altura"
        />
        <Button
          color="#0984e3"
          mode="contained"
          onPress={bmiCalc}
          style={styles.buttonCalc}>
          Calcular
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
  panel: {
    backgroundColor: '#bdc3c7',
    borderRadius: 5,
    width: 150,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 8,
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
    marginVertical: 10,
  },
  height: {
    marginVertical: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonCalc: {
    marginTop: 20,
  },
});

export default App;

import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import Slider from '@react-native-community/slider';
import ModalPassword from '../components/ModalPassword';

let charset =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&-';

export function Home() {
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const generatePassword = () => {
    let password = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPasswordValue(password);
    setModalVisible(true);
  };

  const handleValueChange = value => {
    setSize(Number(value.toFixed(0)));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          value={size}
          onValueChange={handleValueChange}
          maximumTrackTintColor="#b6b6b6"
          minimumTrackTintColor="#392de9"
          thumbTintColor="#392de9"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword
          password={passwordValue}
          handleClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginVertical: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 6
  },
  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from '../hooks/useStorage';
import { useState } from 'react';

export default ModalPassword = ({ password, handleClose }) => {
  const { saveItem } = useStorage();
  const [label, setLabel] = useState('');

  const handleCopyPassword = async () => {
    if (label.trim() === '') {
      alert('Insira um identificador para a senha');
      return;
    }
    await Clipboard.setStringAsync(password);
    await saveItem('data', label, password);

    alert('Senha salva com sucesso!');
    handleClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Insira um identificador</Text>

        <View style={styles.labelInput}>
          <TextInput
            editable
            style={styles.textInput}
            placeholder="Ex: Senha do Instagram"
            value={label}
            onChangeText={text => setLabel(text)}
          />
        </View>

        <Pressable
          style={styles.innerPassword}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleClose}>
              Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={handleClose}
          >
            <Text onPress={handleCopyPassword} style={styles.buttonSaveText}>
              Salvar senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24,24,24,0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: '#FFF',
    width: '85%',
    paddingTop: 24,
    paddingBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    gap: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  innerPassword: {
    backgroundColor: '#0e0e0e',
    width: '90%',
    padding: 14,
    borderRadius: 8
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 8
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 8,
    padding: 12
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonSave: {
    backgroundColor: '#392DE9',
    borderRadius: 8
  },
  buttonSaveText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  labelInput: {
    backgroundColor: '#f0f0f0FF',
    width: '90%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  textInput: {
    fontSize: 16,
    color: '#000000'
  }
});

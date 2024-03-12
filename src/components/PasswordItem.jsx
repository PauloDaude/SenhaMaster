import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';

const PasswordItem = ({ label, password, removePassword, refreshing }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!refreshing) {
      setIsVisible(false);
    }
  }, [refreshing]);

  const handlePasswordOcult = () => {
    setIsVisible(!isVisible);
  };

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password);

    alert('Senha copiada!');
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.areaPassword}>
        <View onLongPress={handleCopyPassword} style={styles.container}>
          <Text style={isVisible ? styles.text : styles.passOcult}>
            {isVisible ? password : '••••••••••••••••••'}
          </Text>
          <Ionicons
            size={20}
            color="#FFF"
            name={'copy-outline'}
            onPress={handleCopyPassword}
          />
          <Ionicons
            size={20}
            paddingLeft={12}
            color="#FFF"
            name={isVisible ? 'eye-outline' : 'eye-off-outline'}
            onPress={handlePasswordOcult}
          />
        </View>

        <TouchableOpacity style={styles.del} onPress={removePassword}>
          <Ionicons name="trash-bin" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PasswordItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    padding: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: '#FFF',
    flex: 1
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '500'
  },
  passOcult: {
    flex: 1,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#FFF'
  },
  areaPassword: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  del: {
    padding: 8,
    backgroundColor: '#ff0000',
    borderRadius: 4
  }
});

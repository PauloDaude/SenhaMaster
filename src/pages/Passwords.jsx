import { useCallback, useEffect, useState } from 'react';
import useStorage from '../hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import PasswordItem from '../components/PasswordItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const Passwords = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { getItem, removeItem } = useStorage();
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  }, [listPasswords]);

  useEffect(() => {
    const loadPasswords = async () => {
      try {
        const passwords = await getItem('data');
        setListPasswords(passwords);
      } catch (error) {
        console.error('Erro ao carregar senhas:', error);
      } finally {
        setIsRefreshing(false);
      }
    };

    loadPasswords();
  }, [focused]);

  const handleDeletePassword = async label => {
    const passwords = await removeItem('data', label);

    setListPasswords(passwords);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          {listPasswords.length < 1 && (
            <Text style={{ textAlign: 'center' }}>
              Nenhuma senha encontrada.
            </Text>
          )}
          <FlatList
            style={{ flex: 1 }}
            data={listPasswords}
            keyExtractor={item => item.password}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            renderItem={({ item }) => (
              <PasswordItem
                label={item.label}
                password={item.password}
                refreshing={isRefreshing}
                removePassword={() => handleDeletePassword(item.label)}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default Passwords;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    padding: 14,
    paddingTop: 100
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    paddingHorizontal: 24
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

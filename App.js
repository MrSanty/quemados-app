import { useState } from 'react';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Form } from './src/components/Form';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [ modalVisible, setModalVisible ] = useState( false );

  const newUser = () => {
    console.log('Diste Click en crear nuevo usuario');
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={ backgroundStyle }>
      <Text style={ styles.sectionTitle }>
        App de Quemados{' '}
        <Text style={ styles.sectionTitleBold }>App de Quemados</Text>
      </Text>
      <Pressable 
        onPress={ () => setModalVisible( true )}
        style={ styles.button }
      >
        <Text>Nueva Cita</Text>
      </Pressable>
      <Form modalVisible={ modalVisible } />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 32,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#374151',
  },
  sectionTitleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  highlight: {
    fontWeight: '700',
  },
  button: ({ pressed }) => ({
    backgroundColor: pressed ? '#374151' : '#6D28D9',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    width: 200,
    borderRadius: 8,
    alignSelf: 'center',
  })
});

export default App;

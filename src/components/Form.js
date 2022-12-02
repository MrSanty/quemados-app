import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export const Form = ({ modalVisible, newUser }) => {
  return (
    <Modal animationType='slide' visible={ modalVisible }>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            Nuevo {' '}
            <Text style={styles.boldTitle}>Usuario</Text>
          </Text>
          <View style={styles.text_input}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              KeyboardType=''
              placeholder='Nombre'
              placeholderTextColor={'#000'}
            />
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              KeyboardType='email-address'
              placeholderTextColor={'#000'}
            />
            <Text style={styles.label}>Celular</Text>
            <TextInput
              style={styles.input}
              KeyboardType='phone-pad'
              placeholderTextColor={'#000'}
            />
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              KeyboardType=''
              placeholderTextColor={'#000'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#0069a3',
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginEnd: 20,
    color: '#fff'
  },
  boldTitle: {
    fontWeight: '700'
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 15,
    fontWeight: '600'
  }, 
  text_input: {
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 100
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  }
})
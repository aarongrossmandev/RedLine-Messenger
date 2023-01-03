import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('')

  const onSend = () => {
    console.warn('Sending a new message', newMessage);

    setNewMessage('');
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name="plus" size={22} color="#CB3636" />
      
        <TextInput 
            value={newMessage} 
            onChangeText={setNewMessage} 
            style={styles.input} 
            placeholder="type your message..." 
          />

      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input:{
    flex:1,
    backgroundColor: 'white',
    padding: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 16,
  },
  send:{
    backgroundColor: '#CB3636',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
})

export default InputBox
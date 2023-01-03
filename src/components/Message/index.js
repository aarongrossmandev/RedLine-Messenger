import { View, Text, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  }

  return (
    <View style={[styles.container, {
        backgroundColor: isMyMessage() ? '#CB3636' : 'white',
        alignSelf: isMyMessage() ? 'flex-end' :  'flex-start',
      }
    ]}>
      <Text style={styles.text}>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // backgroundColor: 'white',
    // alignSelf: 'flex-start',
    
    margin: 5,
    padding: 10,
    borderRadius: 15,
    maxWidth: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

elevation: 8,
  },
  text:{
    color: 'black'
  },
  time:{
    color: '#2D2D2D',
    alignSelf: 'flex-end',
  }
})

export default Message
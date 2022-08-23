import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import test from '../utils/test';

const TestScreen = () => {
  const [text, setText] = useState('');
  const [reversedText, setReversedText] = useState('');
  const transformStr = () => {
    const reversedStr = test.reverseStrNumbers(text);
    console.log('the reversed str is: ', reversedStr);
    setReversedText(reversedStr);
  };
  const clean = () => {
    setText('');
    setReversedText('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test the algorithm 💡</Text>
      <TextInput
        style={styles.input}
        placeholder={'Insert a string to try out the algorithm'}
        onChangeText={setText}
        value={text}
      />
      <TextInput
        style={styles.input}
        placeholder={'Visualize the new string'}
        editable={false}>
        {reversedText}
      </TextInput>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ffbe0b'}]}
          onPress={transformStr}>
          <Text style={styles.buttonText}>Execute</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#3a86ff'}]}
          onPress={clean}>
          <Text style={styles.buttonText}>Clean input fields</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
  },
  buttonsContainer: {
    marginVertical: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 40,
  },
});

export default TestScreen;

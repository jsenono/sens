import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import OpenAI from 'openai';
import Markdown from 'react-native-markdown-display';
import { GlobeIcon, Icon } from './ui/icon';
import { SendHorizontal } from 'lucide-react-native';
import { useActiveModel } from '@/stores/ai-model';

const apiKeys = "";

const openai = new OpenAI({
  apiKey: apiKeys,
  baseURL: '',
  dangerouslyAllowBrowser: true,
});

const ShardChat = () => {
  const [activeModel, setActiveModel] = useActiveModel();
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful assistant.', name: 'system' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: 'user', content: userInput, name: 'user' }];
    setMessages(newMessages);
    setUserInput('');
    setLoading(true);

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: `${activeModel}`,
        messages: newMessages,
      });

      const aiResponse = chatCompletion.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: aiResponse, name: 'assistant' }]);
    } catch (error) {
      console.error('Error communicating with the API:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'An error occurred. Please try again.', name: 'assistant' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 135}
    >
      {/* Chat Messages */}
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.messagesContainer}
        keyboardDismissMode="interactive"
      >
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.role === 'user' ? styles.userBubble : styles.assistantBubble
            ]}

            className={ `${msg.role === 'user' ? "text-white" : styles.assistantBubble}` }
          >
            <Text  className={ `${msg.role === 'user' ? "text-white font-custom" : styles.assistantBubble}` }>

            <Markdown style={msg.role === 'user' ? styles.userText : styles.assistantText}>
              {msg.content}
            </Markdown>
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type your message..."
          style={styles.input}
          onSubmitEditing={handleSend}
          placeholderTextColor="#888"
        />
        <TouchableOpacity 
          onPress={handleSend} 
          disabled={loading}
          style={styles.sendButton}
        >
          <SendHorizontal color="white" size={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  messagesContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  userBubble: {
    backgroundColor: '#6366f1',
    alignSelf: 'flex-end',
    color:"white",
    
  },
  assistantBubble: {
    backgroundColor: '#e5e7eb',
    alignSelf: 'flex-start',
  },
  userText: {
    color: 'white',
  },
  assistantText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 12,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShardChat;
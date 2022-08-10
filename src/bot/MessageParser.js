// in MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi') || message.toLowerCase().includes('hey') || message.toLowerCase().includes('olá')) {

      this.actionProvider.handleHello();
    }
    if (message.includes('email')) {

      this.actionProvider.handleEmail();
    }
    
  }
}

export default MessageParser;
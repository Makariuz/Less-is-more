// in ActionProvider.js
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello() {
  const message = this.createChatbotMessage('Hello. Nice to meet you.');
  
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

  }

  handleEmail() {
    const message = this.createChatbotMessage('You can email me at samuel.eduardo23@gmail.com');
    
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
  
    }


}

export default ActionProvider;

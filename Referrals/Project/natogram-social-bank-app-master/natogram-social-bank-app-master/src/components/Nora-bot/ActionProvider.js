// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  //    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  //    var accInfo = JSON.parse(localStorage.getItem('accInfo'));
  // bankDetails

  greet = () => {
    var accInfo = JSON.parse(localStorage.getItem('accInfo'))
    const message = this.createChatBotMessage(`Hello, ${accInfo.firstName}`)
    this.addMessageToState(message)
  }

  balance = () => {
    var accInfo = JSON.parse(localStorage.getItem('accInfo'))
    const message = this.createChatBotMessage(`Your Account balance is ${accInfo.balance}`)
    this.addMessageToState(message)
  }

  notAvaiableMsg = () => {
    const message = this.createChatBotMessage(`Sorry i can't understand. No worries your request is now submitted.Please give us sometime, Will be reviewed and we will get back`)
    this.addMessageToState(message)
  }

  yourOffers = () => {
    const message = this.createChatBotMessage(`
    Your eligible offers:
    1) Personal Loan worth £ 11,850
    2) Car Loan Worth £ 38,540
    3) Two Wheeler Loan £ 22,670
    4) Open Super Saver account to save more
    5) Premium Credit Card - Your Card`)
    this.addMessageToState(message)
  }
  resetPassword = () => {
    const message = this.createChatBotMessage(`
    *Logout of your account
    *Navigate to http://localhost:3000/forgotpassword
    *Input your email, SeurePIN and new password  
    `)
    this.addMessageToState(message)
  }
  recentTransaction = () => {
    const message = this.createChatBotMessage(`You can view and download your transactions as CSV under recent transaction tab.`)
    this.addMessageToState(message)
  }

  addMessageToState = (message) => {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }

}

export default ActionProvider;
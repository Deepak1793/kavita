import axios from "axios";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    //   this.state = state;
  }

  parse(message) {
    console.log(message)

    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
     var emailId = loggedUser.emailid;
      // console.log(emailid)
    var postMessage = {
      "emailId": emailId,
      "message": message
      
      // "emailId":emailId,
      // // "dateTime": new Date().toLocaleTimeString,
      // "message" :message

    }

    axios.post(`http://localhost:8081/norachathistory`, postMessage)
      .then(res => console.log(res))
      .catch(error => console.log(error))

    const lowercase = message.toLowerCase()


    if (lowercase.includes(`hello`) || lowercase.includes(`hey`) || lowercase.includes(`hi`)) {
      this.actionProvider.greet();
    }

    else if (lowercase.includes(`bal`) || lowercase.includes(`balance`)) {
      this.actionProvider.balance();
    }
    else if (lowercase.includes(`my offers`) ||  lowercase.includes(`offer`) || lowercase.includes(`offers`) ){
      this.actionProvider.yourOffers();
    }

    else if (lowercase.includes(`reset password`) || lowercase.includes(`change password`) ){
      this.actionProvider.resetPassword();
    }
    else if (lowercase.includes(`recent transactions`) || lowercase.includes(`statement`) ){
      this.actionProvider.recentTransaction();
    }
    else {
      this.actionProvider.notAvaiableMsg();
    }


  }
}

export default MessageParser;
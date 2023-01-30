// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import GetBalance from "./Actions/GetBalance";

const config = {
  initialMessages: [createChatBotMessage(`Hello There, I am Nora. How Can I help you?`)],
  botName: `Nora`,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#009FAC',
    },
    chatButton: {
      backgroundColor: '#42145F',
    },
},

state: {
    bals: []
},

widgets: [
    {
        widgetName: 'GetBalance',
        widgetFunc: (props) => <GetBalance {...props} />,
        mapStateToProps:['bals']
    }
]

}

export default config
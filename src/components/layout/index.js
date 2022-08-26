import Header from '../header';
import { MessengerChat } from 'react-messenger-chat-plugin';
import CallButton from '../callButton';

function Layout({ children }) {
  return (
    <div className="main">
      <Header />
      <div className="md:hidden">{children}</div>
      <CallButton />
      <MessengerChat
        pageId="1445135705721986"
        language="en_US"
        themeColor={'#4267B2'}
        bottomSpacing={10}
        loggedInGreeting="Chat with Contégo Spa Designs"
        loggedOutGreeting="Chat with Contégo Spa Designs"
        greetingDialogDisplay={'show'}
        debugMode={true}
        onMessengerShow={() => {
          console.log('onMessengerShow');
        }}
        onMessengerHide={() => {
          console.log('onMessengerHide');
        }}
        onMessengerDialogShow={() => {
          console.log('onMessengerDialogShow');
        }}
        onMessengerDialogHide={() => {
          console.log('onMessengerDialogHide');
        }}
        onMessengerMounted={() => {
          console.log('onMessengerMounted');
        }}
        onMessengerLoad={() => {
          console.log('onMessengerLoad');
        }}
      />
    </div>
  );
}

export default Layout;

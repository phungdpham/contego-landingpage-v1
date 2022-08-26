import Footer from '../footer';
import Header from '../header';
import { MessengerChat } from 'react-messenger-chat-plugin';

function Layout({ children }) {
  return (
    <div className="main">
      <Header />
      <div className="">{children}</div>
      <Footer />
      <MessengerChat
        pageId="1445135705721986"
        language="en_US"
        themeColor={'#4267B2'}
        bottomSpacing={50}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={'icon'}
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

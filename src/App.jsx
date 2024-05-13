import List from "../src/components/list/List";
import Chat from "../src/components/chat/Chat";
import Detail from "../src/components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
  const user = true;
  
  //if there's a user, call the components, otherwise ask to log in
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;

import List from "../src/components/list/List";
import Chat from "../src/components/chat/Chat";
import Detail from "../src/components/detail/Detail";

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detail/>
    </div>
  )
}

export default App
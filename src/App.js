import Header from "./components/Header";
import Navigate from "./components/Navigate";
import ForumBody from "./components/ForumBody";
import ForumList from "./components/ForumList";
import ChosenTopic from "./components/ChosenTopic";
import TopicPost from "./components/TopicPost";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigate />
      </div>
      <div className="container-fluid">
        <Header />
      </div>
      <ForumBody />
      <ForumList />
      <div>
        <ChosenTopic />
      </div>
      <div>
        <TopicPost />
      </div>
    </Router>
  );
}

export default App;

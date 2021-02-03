import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navigate from './components/Navigate';
import ForumBody from './components/ForumBody';
import ForumList from './components/ForumList';
import ChosenTopic from './components/ChosenTopic';
import TopicPost from './components/TopicPost';


function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;

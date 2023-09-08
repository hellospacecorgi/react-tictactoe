import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import Game from "./components/Game";
import Todo from "./components/Todo";

console.log(AlexaImage); // alexa.png is less than 9.7kb gets inlined in bundle.js
console.log(SiriImage); // siri.png is larger than 9.7kb gets treated as a separate file

function App() {
  //for jest tutorial
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "throw rubbish", completed: true },
  ];

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageSrc={AlexaImage}
                description="Alexa was created by Amazon"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageSrc={CortanaImage}
                description="Cortana was created by Microsoft"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                imageSrc={SiriImage}
                description="Siri was created by Apple"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Scene"
                handle="@scenephotography"
                imageSrc="https://picsum.photos/200/300"
                description="Photo from picsum"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        {todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
        <Game />
      </div>
    </div>
  );
}

export default App;

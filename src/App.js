import logo from "./logo.svg";
import "./App.css";
import cgptlogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import home from "./assets/home.svg";
import send from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import send2 from "./assets/send.svg";
import logoo from "./assets/chatgptLogo.svg";
import userIcon from "./assets/user-icon.png";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={cgptlogo} alt="" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addbtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgicon} alt="" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgicon} alt="" />
              What the fuck is API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={send} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="mainbar">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius
              laudantium exercitationem, explicabo numquam, voluptatum nam
              eligendi qui amet iste quod autem, nemo accusamus
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={logoo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              delectus sunt id fuga assumenda facilis sapiente impedit
              asperiores suscipit quidem ea odio vero perferendis. Aliquid dicta
              asperiores tempora nulla repudiandae esse molestiae itaque, fugiat
              tenetur ratione molestias ad odio necessitatibus sint ducimus
              exercitationem. Natus et temporibus consequatur quisquam esse,
              maiores dicta. Pariatur dolorum ipsa accusantium ea, nesciunt
              natus itaque. Blanditiis, dicta cumque reiciendis quidem quos
              deserunt minus cum suscipit corporis neque aliquid, unde
              asperiores. Omnis nesciunt eligendi asperiores nisi! Nisi iusto
              laborum non. Eligendi eius molestiae quibusdam fugiat, magni
              ducimus rem modi, nemo nihil ipsum facere rerum sapiente ut
              dignissimos!
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a Message..." />
            <button className="send">
              <img src={send2} alt="" />
            </button>
          </div>
          <p>
            ChatGPT will produce incorrect information no matter the version,
            fuck you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

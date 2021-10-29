import './App.css';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import StocksContainer22 from "./components/StocksContainer22";

const App = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <StocksContainer22 />
        </div>
      </Provider>
  );
}

export default App;
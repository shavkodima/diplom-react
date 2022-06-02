import {BrowserRouter} from "react-router-dom";
import AppController from "./appController/AppController";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Header from "./component/header/Header";

function App() {
  return (
      <Provider store={store}>
       <BrowserRouter>
       <Header />   
           <main className='main'>
               <AppController />
           </main>
       </BrowserRouter>
      </Provider>
  );
}

export default App;

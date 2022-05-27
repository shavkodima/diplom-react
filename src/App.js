import {BrowserRouter} from "react-router-dom";
import AppController from "./appController/AppController";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
      <Provider store={store}>
       <BrowserRouter>
           <main className='main'>
               <AppController />
           </main>
       </BrowserRouter>
      </Provider>
  );
}

export default App;

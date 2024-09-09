import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
import { Player } from "./pages/Player";

import "./styles/globa.css";

export function App() {
  return (
    // o provider tipo do context para compartilhar  as informações agora dentro dos componentes podemos importar uma função chamada useSelector
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  );
}

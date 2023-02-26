import { RoomContextProvider } from "./Contexts/RoomContext";
import IndexRouter from "./Routes";

function App() {
  return (
    <div>
      <RoomContextProvider>
        <IndexRouter />
      </RoomContextProvider>
    </div>
  );
}

export default App;

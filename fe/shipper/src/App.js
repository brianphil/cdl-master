import "./App.css";
import Dashboard from "./features/components/Dashboard/Dashboard";
import SocketContext from "./features/context/SocketContext";

function App() {
  return (
    <SocketContext>
      <div className="App">
        <h1>Shipper MIS</h1>
        <section>
          <Dashboard />
        </section>
      </div>
    </SocketContext>
  );
}

export default App;

import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const cliendId =
    "1005516788363-g220dm3pfvjeoi0cei3o24solqvhurjq.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={cliendId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

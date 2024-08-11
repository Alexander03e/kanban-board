import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "../assets/styles/globals.css";
import { Providers } from "./providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <Providers>
        <App />
    </Providers>
    // </React.StrictMode>
);

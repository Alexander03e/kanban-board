import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import { Providers } from "./providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <Providers>
        <App />
    </Providers>
    // </React.StrictMode>
);

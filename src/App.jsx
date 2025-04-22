import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import useStore from '@/store';
import { ThemeProvider } from "@/components/theme/theme-provider";
import InitProvider from "./providers/InitProvider";

function App() {
    const { looks } = useStore();

    return (

        <ThemeProvider defaultTheme={looks.theme} storageKey="vite-ui-theme">
            <BrowserRouter>
                <InitProvider>
                    <Routes />
                </InitProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

export const PROJECT_STRUCTURE = {
    src: {
        assets: {
            images: "Store all project images",
            styles: "Global styles and CSS modules"
        },
        components: {
            common: "Reusable UI components",
            layout: "Layout components like Header, Footer, Sidebar",
            theme: "Theme related components"
        },
        hooks: "Custom React hooks",
        lib: "Third-party library configurations",
        pages: "Page components",
        providers: "Context providers",
        routes: "Route configurations",
        services: "API services and data fetching",
        store: "State management (Zustand)",
        utils: "Utility functions"
    }
};

export const REQUIRED_FILES = [
    'src/App.jsx',
    'src/main.jsx',
    '.env',
    'index.html',
    'package.json',
    'vite.config.js'
];

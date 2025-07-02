import { createStore } from "@utils/createStore";

type ThemeStoreState = {
    theme: "dark" | "light";
};

type ThemeStoreAction = {
    getTheme: (state: ThemeStoreState) => string;
    setTheme: (state: ThemeStoreState, theme: ThemeStoreState["theme"]) => void;
    toggleTheme: (state: ThemeStoreState) => void;
    loadSavedTheme: (state: ThemeStoreState) => void;
};

const THEMES: Record<string, ThemeStoreState["theme"]> = { LIGHT: "light", DARK: "dark" };
const LOCAL_STORAGE_KEY = "preferredTheme";
const PREFER_DARK_COLOR_SCHEME_MEDIA = "(prefers-color-scheme: dark)";

const themeStoreInitialState: ThemeStoreState = {
    theme: THEMES.LIGHT,
};

const themeStoreHelper = {
    getUserPreferredColorScheme: () => {
        if (typeof window.matchMedia === "undefined") return THEMES.LIGHT;
        return window.matchMedia(PREFER_DARK_COLOR_SCHEME_MEDIA)?.matches ? THEMES.DARK : THEMES.LIGHT;
    },

    saveThemeToStorage: (theme: string) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
        document.documentElement.setAttribute("data-theme", theme);
    },
};

const themeStoreAction: ThemeStoreAction = {
    getTheme: (state) => {
        return state.theme;
    },
    setTheme: (state, theme) => {
        state.theme = theme;
        themeStoreHelper.saveThemeToStorage(theme);
    },
    toggleTheme: (state) => {
        state.theme = state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        themeStoreHelper.saveThemeToStorage(state.theme);
    },
    loadSavedTheme: (state) => {
        const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) || themeStoreHelper.getUserPreferredColorScheme();
        state.theme = savedTheme as ThemeStoreState["theme"];
        themeStoreHelper.saveThemeToStorage(state.theme);
    },
};

const store = createStore(themeStoreInitialState);

const themeStore = {
    getTheme: () => {
        return themeStoreAction.getTheme(store.getState());
    },
    setTheme: (theme: ThemeStoreState["theme"]) => {
        store.setState((state) => themeStoreAction.setTheme(state, theme), themeStoreAction.setTheme.name);
    },
    toggleTheme: () => {
        store.setState(themeStoreAction.toggleTheme, themeStoreAction.toggleTheme.name);
    },
    loadSavedTheme: () => {
        store.setState(themeStoreAction.loadSavedTheme);
    },
    subscribe: store.subscribe,
};

export { themeStore, themeStoreAction, themeStoreInitialState, ThemeStoreAction, ThemeStoreState, THEMES };

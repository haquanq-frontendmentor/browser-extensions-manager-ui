import { createStore } from "@utils/createStore";
import { BrowserExtension } from "@@types/BrowserExtension";

const data: BrowserExtension[] = [
    {
        logo: "./assets/images/logo-devlens.svg",
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true,
    },
    {
        logo: "./assets/images/logo-style-spy.svg",
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true,
    },
    {
        logo: "./assets/images/logo-speed-boost.svg",
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false,
    },
    {
        logo: "./assets/images/logo-json-wizard.svg",
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true,
    },
    {
        logo: "./assets/images/logo-tab-master-pro.svg",
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true,
    },
    {
        logo: "./assets/images/logo-viewport-buddy.svg",
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false,
    },
    {
        logo: "./assets/images/logo-markup-notes.svg",
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true,
    },
    {
        logo: "./assets/images/logo-grid-guides.svg",
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false,
    },
    {
        logo: "./assets/images/logo-palette-picker.svg",
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true,
    },
    {
        logo: "./assets/images/logo-link-checker.svg",
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true,
    },
    {
        logo: "./assets/images/logo-dom-snapshot.svg",
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false,
    },
    {
        logo: "./assets/images/logo-console-plus.svg",
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        isActive: true,
    },
];

type BrowserExtensionStoreState = {
    browserExtensions: BrowserExtension[];
    currentFilter: number;
};

type BrowserExtensionStoreAction = {
    getExtensions: (state: BrowserExtensionStoreState) => BrowserExtension[];
    toggleExtension: (state: BrowserExtensionStoreState, target: BrowserExtension) => BrowserExtensionStoreState | void;
    removeExtension: (state: BrowserExtensionStoreState, target: BrowserExtension) => BrowserExtensionStoreState | void;
    setFilter: (state: BrowserExtensionStoreState, newFilter: number) => BrowserExtensionStoreState | void;
};

const BROWSER_EXTENSION_FILTER = {
    INACTIVE: 0,
    ACTIVE: 1,
    ALL: 2,
};

const browserExtensionStoreInitialState = {
    currentFilter: BROWSER_EXTENSION_FILTER.ALL,
    browserExtensions: data,
};

const browserEntensionStoreAction: BrowserExtensionStoreAction = {
    getExtensions: (state) => {
        return state.browserExtensions.filter((v) => Number(v.isActive) !== state.currentFilter);
    },
    toggleExtension: (state, target) => {
        for (const v of state.browserExtensions) {
            if (v.name !== target.name) continue;
            v.isActive = !v.isActive;
            break;
        }
    },
    removeExtension: (state, target) => {
        state.browserExtensions = state.browserExtensions.filter((v) => v.name !== target.name);
    },
    setFilter: (state, newFilter) => {
        state.currentFilter = newFilter;
    },
};

const store = createStore(browserExtensionStoreInitialState);

const browserExtensionStore = {
    getExtensions: () => {
        return browserEntensionStoreAction.getExtensions(store.getState());
    },
    toggleExtension: (target: BrowserExtension) => {
        store.setState((state) => browserEntensionStoreAction.toggleExtension(state, target));
    },
    removeExtension: (target: BrowserExtension) => {
        store.setState(
            (state) => browserEntensionStoreAction.removeExtension(state, target),
            browserEntensionStoreAction.removeExtension.name
        );
    },
    setFilter: (newFilter: number) => {
        store.setState(
            (state) => browserEntensionStoreAction.setFilter(state, newFilter),
            browserEntensionStoreAction.setFilter.name
        );
    },
    subcribe: store.subscribe,
};

export {
    BROWSER_EXTENSION_FILTER,
    browserExtensionStore,
    browserEntensionStoreAction,
    browserExtensionStoreInitialState,
    BrowserExtensionStoreAction,
    BrowserExtensionStoreState,
};

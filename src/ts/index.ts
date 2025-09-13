import { themeStore } from "@stores/themeStore";
import { BrowserExtension } from "@@types/BrowserExtension";

const browserExtensionFilterOptions = document.querySelectorAll(
    ".browser-extension-filter__input"
) as NodeListOf<HTMLInputElement>;
const browserExtensionFilterForm = document.querySelector("#browser-extension-filter-form") as HTMLFormElement;

import { BROWSER_EXTENSION_FILTER, browserExtensionStore } from "@stores/browserExtensionStore";

if (browserExtensionFilterOptions.length !== 0) {
    browserExtensionFilterOptions[0].value = BROWSER_EXTENSION_FILTER.ALL;
    browserExtensionFilterOptions[1].value = BROWSER_EXTENSION_FILTER.ACTIVE;
    browserExtensionFilterOptions[2].value = BROWSER_EXTENSION_FILTER.INACTIVE;
}

browserExtensionFilterForm.addEventListener("change", (e) => {
    const element = e.target as HTMLInputElement;
    browserExtensionStore.setFilter(element.value);
});

const themeButton = document.querySelector(".theme-btn") as HTMLButtonElement;

themeStore.subscribe(() => {
    themeButton.setAttribute("aria-label", `Toggle theme (currently ${themeStore.getTheme()} mode)`);
    document.body.classList.add("loading-theme");
    setTimeout(() => {
        document.body.classList.remove("loading-theme");
    }, 100);
}, themeStore.toggleTheme.name);

themeButton.addEventListener("click", () => {
    themeStore.toggleTheme();
});

themeStore.loadSavedTheme();

interface BrowserExtensionItemProps {
    browserExtension: BrowserExtension;
}

const browserExtensionList = document.querySelector(".browser-extension__list") as HTMLElement;
const browserExtensionItemEmpty = browserExtensionList.querySelector("& > li") as HTMLElement;
const browserExtensionItemTemplate = browserExtensionList.querySelector("& > template") as HTMLTemplateElement;
const browserExtensionItemFragment = browserExtensionItemTemplate.content;
browserExtensionItemTemplate.remove();

const createBrowserExtensionItem = (props: BrowserExtensionItemProps) => {
    const cloned = browserExtensionItemFragment.cloneNode(true) as DocumentFragment;

    const item = cloned.querySelector(".browser-extension__item") as HTMLElement;
    const itemLogo = cloned.querySelector(".browser-extension__logo") as HTMLImageElement;
    const itemName = cloned.querySelector(".browser-extension__name") as HTMLHeadElement;
    const itemDescription = cloned.querySelector(".browser-extension__description") as HTMLParagraphElement;
    const itemRemoveButton = cloned.querySelector(".browser-extension__remove-btn") as HTMLButtonElement;
    const itemToggleIpnut = cloned.querySelector(".browser-extension__toggle-btn input") as HTMLInputElement;

    itemLogo.src = props.browserExtension.logo;
    itemLogo.alt = props.browserExtension.name + "-logo";
    itemName.textContent = props.browserExtension.name;
    itemDescription.textContent = props.browserExtension.description;
    itemToggleIpnut.checked = props.browserExtension.isActive;

    itemRemoveButton.addEventListener("click", () => {
        browserExtensionStore.removeExtension(props.browserExtension);
    });

    itemToggleIpnut.addEventListener("change", () => {
        browserExtensionStore.toggleExtension(props.browserExtension);
    });

    return item;
};

const loadBrowserExtensions = () => {
    browserExtensionList.innerHTML = "";
    let noExtensionCardRendered = true;
    browserExtensionStore.getExtensions().forEach((browserExtension) => {
        browserExtensionList.appendChild(createBrowserExtensionItem({ browserExtension }));
        noExtensionCardRendered = false;
    });

    if (noExtensionCardRendered) {
        browserExtensionList.appendChild(browserExtensionItemEmpty);
    }
};

browserExtensionStore.subcribe(() => {
    loadBrowserExtensions();
}, browserExtensionStore.removeExtension.name);

browserExtensionStore.subcribe(() => {
    loadBrowserExtensions();
}, browserExtensionStore.setFilter.name);

loadBrowserExtensions();

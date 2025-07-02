import { browserExtensionStore } from "@stores/browserExtensionStore";
import { BrowserExtensionCard } from "./BrowserExtensionCard";

const fragment = (document.querySelector("#BrowserExtensionList") as HTMLTemplateElement).content;

export const ExtensionList = () => {
    const cloned = fragment.cloneNode(true) as DocumentFragment;
    const component = {
        element: cloned.querySelector(".browser-extension-list") as HTMLUListElement,
        empty: cloned.querySelector(".browser-extension-list--empty") as HTMLLIElement,
    };

    const renderExtensionCard = () => {
        component.element.innerHTML = "";
        let noExtensionCardRendered = true;
        browserExtensionStore.getExtensions().forEach((browserExtension) => {
            const extensionCard = BrowserExtensionCard({ browserExtension });
            component.element.appendChild(extensionCard.element);
            noExtensionCardRendered = false;
        });
        if (noExtensionCardRendered) {
            component.element.appendChild(component.empty);
        }
    };

    browserExtensionStore.subcribe(() => {
        renderExtensionCard();
    }, browserExtensionStore.removeExtension.name);

    browserExtensionStore.subcribe(() => {
        renderExtensionCard();
    }, browserExtensionStore.setFilter.name);

    renderExtensionCard();
    return component.element;
};

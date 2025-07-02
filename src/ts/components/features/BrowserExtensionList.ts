import { browserExtensionStore } from "@stores/browserExtensionStore";
import { BrowserExtensionCard } from "./BrowserExtensionCard";

const fragment = (document.querySelector("#BrowserExtensionList") as HTMLTemplateElement).content;

export const ExtensionList = () => {
    const cloned = fragment.cloneNode(true) as DocumentFragment;
    const component = {
        element: cloned.querySelector(".extension__list") as HTMLUListElement,
    };

    const renderExtensionCard = () => {
        browserExtensionStore.getExtensions().forEach((browserExtension) => {
            const extensionCard = BrowserExtensionCard({ browserExtension });
            component.element.appendChild(extensionCard.element);
        });
    };

    browserExtensionStore.subcribe(() => {
        component.element.innerHTML = "";
        renderExtensionCard();
    }, browserExtensionStore.removeExtension.name);

    renderExtensionCard();
    return component.element;
};

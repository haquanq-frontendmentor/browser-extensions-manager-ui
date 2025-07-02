import { BrowserExtension } from "../../types/BrowserExtension";
import { ExtensionCardRemoveButton } from "./BrowserExtensionCardRemoveButton";
import { ExtensionCardToggleButton } from "./BrowserExtensionCardToggleButton";

const fragment = (document.querySelector("#BrowserExtensionCard") as HTMLTemplateElement).content;

interface BrowserExtensionCardProps {
    browserExtension: BrowserExtension;
}

export const BrowserExtensionCard = (props: BrowserExtensionCardProps) => {
    const cloned = fragment.cloneNode(true) as DocumentFragment;

    const component = {
        element: cloned.querySelector(".extension__card") as HTMLLinkElement,
        logo: cloned.querySelector(".extension__intro__logo") as HTMLImageElement,
        title: cloned.querySelector(".extension__intro__title") as HTMLHeadElement,
        description: cloned.querySelector(".extension__intro__description") as HTMLParagraphElement,
        removeButton: ExtensionCardRemoveButton({ browserExtension: props.browserExtension }),
        toggleButton: ExtensionCardToggleButton({ browserExtension: props.browserExtension }),
    };

    cloned.querySelector(".extension__action__remove-btn-slot")?.appendChild(component.removeButton.element);
    cloned.querySelector(".extension__action__toggle-btn-slot")?.appendChild(component.toggleButton.element);

    component.logo.src = props.browserExtension.logo;
    component.logo.alt = props.browserExtension.name + "-logo";
    component.title.textContent = props.browserExtension.name;
    component.description.textContent = props.browserExtension.description;

    return component;
};

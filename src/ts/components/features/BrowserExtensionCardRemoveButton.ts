import { Button } from "@components/base/Button";
import { BrowserExtension } from "@@types/BrowserExtension";
import { browserExtensionStore } from "@stores/browserExtensionStore";

interface BrowserExtensionCardRemoveButtonProps {
    browserExtension: BrowserExtension;
}

export const ExtensionCardRemoveButton = (props: BrowserExtensionCardRemoveButtonProps) => {
    const component = Button({
        tooltip: `Remove ${props.browserExtension.name} extension from browser`,
        label: "Remove",
    });

    component.element.addEventListener("click", () => {
        browserExtensionStore.removeExtension(props.browserExtension);
    });

    return component;
};

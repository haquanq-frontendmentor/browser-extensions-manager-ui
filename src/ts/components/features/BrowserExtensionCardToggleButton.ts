import { BrowserExtension } from "@@types/BrowserExtension";
import { Switch } from "@components/base/Switch";
import { browserExtensionStore } from "@stores/browserExtensionStore";

interface BrowserExtensionCardToggleButtonProps {
    browserExtension: BrowserExtension;
}

export const ExtensionCardToggleButton = (props: BrowserExtensionCardToggleButtonProps) => {
    const component = Switch({
        id: props.browserExtension.name + "-toggle",
        checked: props.browserExtension.isActive,
        label: "Toggle " + props.browserExtension.name + " on/off",
    });

    component.input.addEventListener("change", () => {
        browserExtensionStore.toggleExtension(props.browserExtension);
    });

    return component;
};

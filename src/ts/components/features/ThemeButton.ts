import { themeStore } from "@stores/themeStore";

const fragment = (document.querySelector("#ThemeButton") as HTMLTemplateElement).content;

export const ThemeButton = () => {
    const cloned = fragment.cloneNode(true) as DocumentFragment;

    const component = {
        element: cloned.querySelector(".theme-btn") as HTMLButtonElement,
    };

    themeStore.subscribe(() => {
        component.element.setAttribute("aria-label", `Toggle theme (currently ${themeStore.getTheme()} mode)`);
        document.body.classList.add("loading-theme");
        setTimeout(() => {
            document.body.classList.remove("loading-theme");
        }, 100);
    }, themeStore.toggleTheme.name);

    component.element.addEventListener("click", () => {
        themeStore.toggleTheme();
    });

    themeStore.loadSavedTheme();
    return component;
};

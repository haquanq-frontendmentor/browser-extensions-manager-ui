const fragment = (document.querySelector("#Button") as HTMLTemplateElement).content;

interface ButtonProps {
    tooltip?: string;
    label: string;
}

export const Button = (props: ButtonProps) => {
    const cloned = fragment.cloneNode(true) as DocumentFragment;
    const compoent = {
        element: cloned.querySelector(".btn") as HTMLButtonElement,
    };

    if (props.label) compoent.element.textContent = props.label;
    if (props.tooltip) compoent.element.title = props.tooltip;
    return compoent;
};

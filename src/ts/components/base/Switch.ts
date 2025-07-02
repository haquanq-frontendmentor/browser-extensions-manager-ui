const fragment = (document.querySelector("#Switch") as HTMLTemplateElement).content;
export interface SwitchProps {
    id: string;
    label: string;
    checked: boolean | undefined;
    tooltip?: string;
}

export const Switch = (props: SwitchProps) => {
    const cloned = fragment.cloneNode(true) as DocumentFragment;

    const component = {
        element: cloned.querySelector(".switch") as HTMLLabelElement,
        input: cloned.querySelector(".switch__input") as HTMLInputElement,
        label: cloned.querySelector(".switch__label") as HTMLSpanElement,
    };

    component.element.setAttribute("for", props.id);
    component.label.textContent = props.label;
    component.input.id = props.id;
    if (props.checked) component.input.checked = props.checked;
    if (props.tooltip) component.element.title = props.tooltip;

    return component;
};

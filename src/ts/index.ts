import { ThemeButton } from "./components/features/ThemeButton";
import { ExtensionList } from "./components/features/BrowserExtensionList";

document.querySelector(".header__theme-btn-slot")?.appendChild(ThemeButton().element);
document.querySelector(".main__container")?.appendChild(ExtensionList());

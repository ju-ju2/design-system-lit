import { TagColorType } from "@hnine-dev/design-system-common/types";
import { html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { BaseProps } from "../../type";
import { BaseElement } from "../baseElement";
import styles from "./index.scss?inline";

export interface TagProps extends BaseProps {
  propAriaLabel?: string;
  class?: string;
  color?: TagColorType;
  size?: "M";
  onClick?: (e: MouseEvent) => void;
}

@customElement("hnine-tag")
export class Tag extends BaseElement {
  @property({ type: String }) propAriaLabel: TagProps["propAriaLabel"];
  @property({ type: String }) class: TagProps["class"];
  @property({ type: String }) propStyle: TagProps["propStyle"];
  @property({ type: String }) color: TagProps["color"] = "brand";
  // @property({ type: String }) size: TagProps["size"] = "M";
  @property({ attribute: false }) onClick: TagProps["onClick"];

  static styles = unsafeCSS(styles);

  private handleClick(e: MouseEvent) {
    if (this.onClick) {
      this.onClick(e);
    }
  }

  render() {
    const className = {
      "hnine-tag": true,
      [`hnine-tag--${this.color}`]: this.color !== undefined,
      [`${this.class}`]: this.class !== undefined,
    };

    return html`
      <span
        class="${classMap(className)}"
        style=${ifDefined(this.propStyle)}
        @click=${this.handleClick}
        aria-label=${ifDefined(this.propAriaLabel)}
        tabindex="0"
        ><slot></slot
      ></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hnine-tag": Tag;
  }
}

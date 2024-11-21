import { LitElement } from "lit";

export class BaseElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    const existingLink = document.querySelector(
      'link[href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"]',
    );

    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css";
      document.head.appendChild(link);
    }
  }
}

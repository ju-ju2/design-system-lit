import ".";

import { html, render, TemplateResult } from "lit";
import { describe, expect, it, vi } from "vitest";

const setupTag = async (htmlContent: TemplateResult) => {
  await render(htmlContent, document.body);
  const element = document.body.querySelector("hnine-tag");
  const shadowElement = element?.shadowRoot?.querySelector("span");
  expect(shadowElement).not.toBeNull();
  return { element, shadowElement };
};

describe("hnine-tag", () => {
  it("is defined", async () => {
    await setupTag(html`<hnine-tag>Tag</hnine-tag>`);
  });

  it("renders with default values", async () => {
    const { shadowElement } = await setupTag(html`<hnine-tag>Tag</hnine-tag>`);
    expect(shadowElement?.classList.contains("hnine-tag--brand")).toBe(true);
  });

  it("render slot content", async () => {
    const { shadowElement } = await setupTag(html`<hnine-tag>Tag</hnine-tag>`);
    const slot = shadowElement?.parentNode?.querySelector("slot");
    expect(slot).not.toBeNull();
    if (slot) {
      const slotContent = slot
        .assignedNodes()
        .find((node) => node.nodeType === Node.TEXT_NODE);
      expect(slotContent?.textContent?.trim()).toBe("Tag");
    }
  });
});

describe("Attributes", () => {
  it("is bound to `color` attribute", async () => {
    const { shadowElement } = await setupTag(
      html`<hnine-tag color="pink">Tag</hnine-tag>`,
    );
    expect(shadowElement?.classList.contains("hnine-tag--pink")).toBe(true);
  });

  it("is bound to `class` attribute", async () => {
    const { shadowElement } = await setupTag(
      html`<hnine-tag class="test-className">Tag</hnine-tag>`,
    );
    expect(shadowElement?.classList.contains("test-className")).toBe(true);
  });

  it("is bound to `propStyle` attribute", async () => {
    const { shadowElement } = await setupTag(
      html`<hnine-tag propStyle="color: yellow;">Tag</hnine-tag>`,
    );
    expect(shadowElement?.getAttribute("style")).toContain("color: yellow;");
  });
});

describe("event handler", () => {
  it("click", async () => {
    const clickTest = vi.fn();
    const { shadowElement } = await setupTag(
      html`<hnine-tag .onClick=${clickTest}>Tag</hnine-tag>`,
    );
    shadowElement?.click();
    expect(clickTest).toHaveBeenCalledTimes(1);
  });
});

describe("accessibility", () => {
  it("is bound to `propAriaLabel` attribute", async () => {
    const { shadowElement } = await setupTag(
      html`<hnine-tag propAriaLabel="aria-label">Tag</hnine-tag>`,
    );
    expect(shadowElement?.getAttribute("aria-label")).toBe("aria-label");
  });
});

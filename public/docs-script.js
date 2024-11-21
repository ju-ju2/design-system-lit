function applyStylesBasedOnURL() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const viewMode = searchParams.get("viewMode");
  const isIntroDocs =
    viewMode === "docs" && id?.toLowerCase().startsWith("intro");

  if (isIntroDocs) {
    const wrapper = document.querySelector(".sbdocs.sbdocs-wrapper");
    if (wrapper) {
      wrapper.style.padding = "0 0";
    }

    const content = document.querySelector(".sbdocs-content");
    if (content) {
      content.style.maxWidth = "unset";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const storybookDocs = document.querySelector("#storybook-docs");

  if (storybookDocs) {
    const config = { attributes: false, childList: true, subtree: false };
    const observer = new MutationObserver(function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          applyStylesBasedOnURL();
        }
      }
    });

    observer.observe(storybookDocs, config);
  }
});

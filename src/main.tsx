import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pageMetadata } from "./data/site";
import "./styles/index.css";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
}

document.title = pageMetadata.title;
setMeta("name", "description", pageMetadata.description);
setMeta("property", "og:type", "website");
setMeta("property", "og:title", pageMetadata.title);
setMeta("property", "og:description", pageMetadata.description);
setMeta("name", "twitter:card", "summary");
setMeta("name", "twitter:title", pageMetadata.title);
setMeta("name", "twitter:description", pageMetadata.description);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SiteHeader from "./SiteHeader";
import { siteCopy } from "../data/site";

class TestIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin: string;
  readonly thresholds: readonly number[];

  constructor(_callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.rootMargin = options?.rootMargin ?? "0px";
    const threshold = options?.threshold ?? 0;
    this.thresholds = Array.isArray(threshold) ? threshold : [threshold];
  }

  disconnect() {}

  observe() {}

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve() {}
}

describe("mobile navigation keyboard behavior", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", TestIntersectionObserver);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("opens, navigates, closes, and restores focus using the keyboard", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const openButton = screen.getByRole("button", {
      name: siteCopy.navigation.openMenu,
    });
    openButton.focus();

    await user.keyboard("{Enter}");
    expect(openButton.getAttribute("aria-expanded")).toBe("true");

    await user.tab();
    const homeLink = screen.getByRole("link", {
      name: siteCopy.navigation.home,
    });
    expect(document.activeElement).toBe(homeLink);

    await user.tab();
    const aboutLink = screen.getByRole("link", {
      name: siteCopy.sections.about.navLabel,
    });
    expect(document.activeElement).toBe(aboutLink);

    await user.keyboard("{Enter}");
    expect(openButton.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(openButton);

    await user.keyboard("{Enter}");
    expect(openButton.getAttribute("aria-expanded")).toBe("true");
    await user.keyboard("{Escape}");
    expect(openButton.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(openButton);
  });
});

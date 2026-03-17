const ANALYTICS_API = "/api/analytics";

type EventType = "page_view" | "project_click" | "project_visit" | "resume_download" | "devtools_open" | "live_demo_click" | "social_click";

interface EventData {
  [key: string]: string | number | boolean | undefined;
}

async function trackEvent(eventType: EventType, eventData: EventData = {}) {
  try {
    await fetch(ANALYTICS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, eventData }),
    });
  } catch {
    // Analytics should never break the app
  }
}

export function trackPageView() {
  trackEvent("page_view", {
    path: window.location.pathname,
    referrer: document.referrer || undefined,
  });
}

export function trackProjectClick(projectName: string) {
  trackEvent("project_click", { projectName });
}

export function trackProjectVisit(projectName: string, url: string) {
  trackEvent("project_visit", { projectName, url });
}

export function trackResumeDownload() {
  trackEvent("resume_download");
}

export function trackLiveDemoClick() {
  trackEvent("live_demo_click");
}

export function trackSocialClick(platform: string) {
  trackEvent("social_click", { platform });
}

let devtoolsTracked = false;

export function initDevtoolsTracking() {
  if (typeof window === "undefined") return;

  const threshold = 160;

  const check = () => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if ((widthDiff || heightDiff) && !devtoolsTracked) {
      devtoolsTracked = true;
      trackEvent("devtools_open");
    }
  };

  window.addEventListener("resize", check, { passive: true });
  check();
}

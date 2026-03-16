const ANALYTICS_API = "/api/analytics";

type EventType = "page_view" | "project_click" | "resume_download";

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

export function trackResumeDownload() {
  trackEvent("resume_download");
}

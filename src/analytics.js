import posthog from 'posthog-js'

const key = import.meta.env.VITE_POSTHOG_KEY
const enabled = Boolean(key)

export function initAnalytics() {
  if (!enabled) return
  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    defaults: '2025-05-24', // web analytics: automatic pageviews + pageleave
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    disable_session_recording: false, // session replay (also enable it in PostHog project settings)
    session_recording: { maskAllInputs: true },
  })
}

// Funnel events: cta_clicked -> waitlist_form_started -> waitlist_submitted
export function track(event, properties) {
  if (enabled) posthog.capture(event, properties)
}

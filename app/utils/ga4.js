/**
 * GA4 Event Tracking Utility
 *
 * Provides a reusable, production-safe wrapper around window.gtag.
 * - Guards against gtag not being loaded (SSR or ad-blockers)
 * - Automatically appends current page path to every event
 * - Deduplicated by design: call once per user action
 *
 * Standard event names used:
 *   contact_click  – CTA / "Contact Us" button clicks
 *   form_submit    – Contact form successful submission
 *   lead_click     – Direct lead actions (email, phone, WhatsApp)
 *   cta_click      – General call-to-action clicks
 *   enquiry_click  – Enquiry-intent actions
 */

/**
 * Send a GA4 event via gtag.
 *
 * @param {string} eventName  - GA4 event name (e.g. 'contact_click')
 * @param {Object} params     - Event parameters (section, type, etc.)
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', eventName, {
    page: window.location.pathname,
    ...params,
  })
}

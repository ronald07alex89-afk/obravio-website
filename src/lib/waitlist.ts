/**
 * Single source of truth for sending captured leads to the sales pipeline.
 *
 * The waitlist-signup edge function (in the Obravio Main repo) handles all the
 * server-side work: it saves the lead, emails sales@, and creates a starred
 * "inbound" lead in the CRM. The website only needs to POST clean data here.
 *
 * IMPORTANT: routing (which inbox / CRM) is 100% server-side — never hardcode a
 * destination email address in the website.
 */
const WAITLIST_ENDPOINT =
  'https://mhvgbquhfmcfrgwfrvmo.supabase.co/functions/v1/waitlist-signup';

export interface LeadPayload {
  /** Required — the prospect's email. */
  email: string;
  /** Optional — only include when the form collects it. */
  name?: string;
  /** Optional — only include when the form collects it. */
  company?: string;
  /** Which form the lead came from, e.g. "obravio.com — early access". */
  source: string;
}

/**
 * Submit a lead to the pipeline. Resolves `true` on a 2xx response, `false`
 * on any non-2xx response or network error — callers should show a friendly
 * error (not a silent success) when this returns false.
 */
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch(WAITLIST_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

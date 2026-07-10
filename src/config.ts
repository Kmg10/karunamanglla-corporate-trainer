export const TRAINER_NAME = 'Karuna Manglla';

/**
 * Calendly scheduling URL — use Manglla spelling to match site branding.
 * Update your Calendly account URL at calendly.com/account/settings if needed.
 */
export const CALENDLY_URL = 'https://calendly.com/karuna-manglla';

/** Cumulative instructor delivery hours across all programs */
export const HOURS_TAUGHT = 10000;

/** Learner session rating (out of 5) */
export const SESSION_RATING = 4.93;

export const CALENDLY_CONFIGURED =
  CALENDLY_URL.startsWith('https://calendly.com/') && CALENDLY_URL.length > 28;

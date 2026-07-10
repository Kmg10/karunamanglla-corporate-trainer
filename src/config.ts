export const TRAINER_NAME = 'Karuna Manglla';

/**
 * Calendly setup — paste your full event URL once your account is live.
 * Example: https://calendly.com/your-username/30min
 * Leave empty to show email booking only.
 */
export const CALENDLY_URL = '';

/** Cumulative instructor delivery hours across all programs */
export const HOURS_TAUGHT = 10000;

/** Learner session rating (out of 5) */
export const SESSION_RATING = 4.93;

export const CALENDLY_CONFIGURED =
  CALENDLY_URL.startsWith('https://calendly.com/') && CALENDLY_URL.length > 28;

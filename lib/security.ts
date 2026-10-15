/**
 * FYNUX Application Security Utilities
 * Includes rate limiting, input sanitization, and security helpers.
 */

// Simple in-memory sliding-window rate limiter
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Clean up stale entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * Checks and updates rate limit for a client identifier.
 * @param identifier IP or client token
 * @param limit Max allowed requests
 * @param windowMs Time window in milliseconds
 */
export function checkRateLimit(
  identifier: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): { allowed: boolean; remaining: number; retryAfterSeconds: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }

  if (record.count >= limit) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, remaining: 0, retryAfterSeconds: retryAfter };
  }

  record.count += 1;
  return {
    allowed: true,
    remaining: limit - record.count,
    retryAfterSeconds: 0,
  };
}

/**
 * Sanitizes user input string against XSS and control characters.
 */
export function sanitizeInput(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Strip brackets
    .replace(/javascript:/gi, '') // Strip javascript scheme
    .replace(/on\w+=/gi, '') // Strip inline event handlers
    .trim();
}

/**
 * Validates Indonesian phone or international WhatsApp format.
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s-+()]/g, '');
  return /^[0-9]{9,15}$/.test(cleaned);
}

/**
 * Validates standard email address.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

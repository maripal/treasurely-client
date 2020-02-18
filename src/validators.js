export const required = value => value ? undefined : 'Required';
export const minLength = min => value => value && value < min ? `Must be at least ${min} characters` : undefined;
export const usernameMinLength = minLength(3);
export const pwMinLength = minLength(8);
export const maxLength = max => value => value && value > max ? `Must be ${max} characters or less` : undefined;
export const pwMaxLength = maxLength(72);
export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with spaces';
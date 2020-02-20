export const required = value => value ? undefined : 'Required';
export const nonEmpty = value => value.trim !== '' ? undefined : 'Cannot be empty';
export const minLength = min => value => value && value.length < min ? `Must be at least ${min} characters` : undefined;
export const usernameMinLength = minLength(3);
export const pwMinLength = minLength(8);
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const pwMaxLength = maxLength(72);
export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with spaces'; 
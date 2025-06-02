// utils/auth.js

export function isAuthenticated() {
  // Simulate authentication; replace with real logic
  return localStorage.getItem('auth') === 'true';
}

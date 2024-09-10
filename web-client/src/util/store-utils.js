import { ACCESS_TOKEN } from '../constants';

export function loadFromStorage() {
  const token = localStorage.getItem(ACCESS_TOKEN);
  return (token && {auth: {token}}) || {};
}

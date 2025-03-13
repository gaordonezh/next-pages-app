import { LinksProps } from '@/interfaces/global';
import { storageKey } from './constants';

export const classNames = (...classes: Array<string | boolean | undefined>) => {
  return classes.filter(Boolean).join(' ');
};

export const storage = {
  set(data: LinksProps) {
    window.localStorage.setItem(storageKey, JSON.stringify(data));
  },
  get(): null | LinksProps {
    const raw = window.localStorage.getItem(storageKey);
    return JSON.parse(String(raw));
  },
};

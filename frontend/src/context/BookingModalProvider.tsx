import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

interface BookingModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const BookingModalContext = createContext<BookingModalContextValue | undefined>(
  undefined,
);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<BookingModalContextValue>(
    () => ({ isOpen, open, close }),
    [isOpen, open, close],
  );

  return (
    <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>
  );
}

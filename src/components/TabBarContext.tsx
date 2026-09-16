import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const TabBarContext = createContext<{ hidden: boolean; setHidden: (h: boolean) => void }>({
  hidden: false,
  setHidden: () => {},
});

export function TabBarProvider({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  return <TabBarContext.Provider value={{ hidden, setHidden }}>{children}</TabBarContext.Provider>;
}

export function useTabBarContext() {
  return useContext(TabBarContext);
}

/** Lets a page (e.g. Inbox's chat view) temporarily hide the persistent tab bar. */
export function useTabBarHidden(hidden: boolean) {
  const { setHidden } = useContext(TabBarContext);
  useEffect(() => {
    setHidden(hidden);
    return () => setHidden(false);
  }, [hidden, setHidden]);
}

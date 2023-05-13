import { createContext, useContext, useState } from "react";

const SidebarConfigContext = createContext();

export const useSidebarConfig = () => {
  const context = useContext(SidebarConfigContext);

  return context[0];
};

export const useSetSidebarConfig = () => {
  const context = useContext(SidebarConfigContext);

  return context[1];
};

export const SidebarConfigProvider = ({ children }) => {
  const state = useState({ showRatingCard: false, showMobileSidebar: true });

  return <SidebarConfigContext.Provider value={state}>{children}</SidebarConfigContext.Provider>;
};

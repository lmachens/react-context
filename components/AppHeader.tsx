import React, { ReactNode } from "react";

type AppHeaderProps = {
  children: ReactNode;
};
function AppHeader({ children }: AppHeaderProps) {
  return (
    <header>
      <h1>MyShopping24</h1>
      {children}
    </header>
  );
}

export default AppHeader;

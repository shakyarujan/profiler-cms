import React from "react";
import TodosList from "./TodosList";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <div>
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}

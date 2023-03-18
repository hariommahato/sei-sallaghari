import { Provider } from "react-redux";
import { store } from "./store";
import { SSRProvider } from "react-bootstrap";
import { SessionProvider } from "next-auth/react";
import { ProSidebarProvider } from "react-pro-sidebar";
export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ProSidebarProvider>
        <SessionProvider>
          <SSRProvider>{children}</SSRProvider>
        </SessionProvider>
      </ProSidebarProvider>
    </Provider>
  );
}

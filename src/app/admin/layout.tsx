"use client";

import { AdminLayout } from "@/features/auth/ui/AdminLayout/AdminLayout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import '../(main)/globals.css'
import { persistor, store } from "@/store/store";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AdminLayout>{children}</AdminLayout>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

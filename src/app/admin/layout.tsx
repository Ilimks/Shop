import { ReduxProvider } from "@/shared/providers/ReduxProvider";
import { SidebarAdmin } from "@/widgets/sidebarAdmin/SidebarAdmin";

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="ru">
        <body>
          <ReduxProvider>
            <SidebarAdmin />
            {children}
          </ReduxProvider>
        </body>
      </html>
    );
  }
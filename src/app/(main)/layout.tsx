import "./globals.css";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { ReduxProvider } from "@/shared/providers/ReduxProvider";
import { AuthModal } from "@/features/auth/ui/AuthModal";
import styles from "./layout.module.scss"; 

export const metadata = {
  title: "Belle Nuit",
  description:
    "Мягкие и приятные к телу ткани подарят вам ощущение уюта после насыщенного дня..."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={styles.body}>
        <ReduxProvider>
          <div className={styles.wrapper}>
            <Header />
            <main className={styles.mainContent}>
              {children}
            </main>
            <Footer />
          </div>
          <AuthModal />
        </ReduxProvider>
      </body>
    </html>
  );
}

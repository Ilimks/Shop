import "./globals.css";

export const metadata = {
  title: "Магазин одежды",
  description: "Лучшие товары для вашего гардероба",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}


import "./globals.css";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { ReduxProvider } from "@/shared/providers/ReduxProvider"; 

export const metadata = {
  title: "Belle Nuit",
  description: "Мягкие и приятные к телу ткани подарят вам ощущение уюта после насыщенного дня. Пижамы идеально подойдут для спокойного сна, костюмы — для расслабленного утра или уютного вечера дома, а халаты станут незаменимыми после душа или просто в моменты, когда хочется окутать себя теплом. Мы предлагаем разнообразие фасонов, расцветок и материалов: от лёгкого хлопка до нежного велюра. Каждая модель создана с заботой о вашем комфорте и стиле — потому что даже дома вы заслуживаете выглядеть красиво и чувствовать себя отлично. Выбирайте одежду для сна и отдыха, которая подойдёт именно вам — для тёплых вечеров, уютных выходных и сладких снов."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <ReduxProvider>
          <Header/>
            {children}
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}


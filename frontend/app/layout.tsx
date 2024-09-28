import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "ToDo Web App",
  description: "ToDo App é um software para ajudar na gestão das suas tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}

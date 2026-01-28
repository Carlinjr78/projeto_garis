import "./globals.css";

export const metadata = {
  title: "Projeto Social",
  description: "Landing page institucional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}

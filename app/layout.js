import "./globals.css";

export const metadata = {
  title: "Sarath S B | Developer Portfolio",
  description: "Flutter + React Developer from Trivandrum.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}

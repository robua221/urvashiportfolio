import "./globals.css";

export const metadata = {
  title: "Urvashi Sharma | Architect",
  description: "Portfolio of Architect & Project Manager Urvashi Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}

import Background from "../components/background/Background";
import "../styles/global.css";

export const metadata = {
  title: "Birthday To You",
  description: "Birthday To You for Eunji Kim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background>{children}</Background>
      </body>
    </html>
  );
}

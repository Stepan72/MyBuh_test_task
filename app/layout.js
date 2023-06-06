import "./../styles/globals.css";

export const metadata = {
  title: "MyBuh test",
  description: "MyBuh test application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

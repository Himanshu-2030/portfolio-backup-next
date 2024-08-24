export const metadata = {
  title: 'Himanshu Portfolio',
  description: 'My portfolio showcasing projects and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

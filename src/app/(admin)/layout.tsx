import Head from "@/components/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head />
      {children}
    </>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Providers } from "@/components/providers";
import { commitMono, inter, notoSansJP } from "@/lib/font";
import "@/style/global.css";
import { Toaster } from "@workspace/ui/components/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${commitMono.variable} overflow-x-hidden font-sans antialiased`}
      >
        <Providers>
          <Header title={"TSUKIIZUKII"} />
          {children}
          <Toaster />
          <Footer title={"TSUKIIZUKII"} />
        </Providers>
      </body>
    </html>
  );
}

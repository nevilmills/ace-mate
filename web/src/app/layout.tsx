import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { NavBar } from "@/components/nav-bar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        // variables: {
        //   colorPrimary: "hsl(47.9 95.8% 53.1%)",
        // },
      }}
      dynamic
    >
      <html lang="en">
        <body
          className={`${geistSans.className} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <div className="grow flex flex-col pt-[92px]">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

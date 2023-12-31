import "./globals.css";
import { Poppins , Montserrat } from "next/font/google";
import Header from "@/components/Header";

const poppins = Poppins({ subsets: ["latin"], weight:[ '400' , '600' , '800'] });
const montserrat = Montserrat({
  subsets : ['latin'],
  weight : ['400' , '600']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Header />
      <div className="color"></div>
        {children}</body>
    </html>
  );
}

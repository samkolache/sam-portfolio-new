
import { Montserrat} from 'next/font/google';

import "./globals.css";
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#02040D]">

      
        <body
          className={`${montserrat.className}`}
        >
          <Navbar />
            {children}
            <Footer />
        </body>
        
     
    </html>
  );
}

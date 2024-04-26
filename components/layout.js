import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from 'next/image'
import Link from "next/link";

const Layout = ({ children }) => {
    return (
      <div className="bg-[#f3f4f6] min-h-screen">
        <div className="border-b">
          <div className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link href="/">
              <img src="/10k1m_logo.png" alt="logo"className="w-10 h-auto"/>
            </Link>
            <div className="flex space-x-4"></div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">kate@10k1m.com</span>
              <Button className="text-sm" variant="ghost">
                logout
              </Button>
            </div>

          </div>
        </div>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Layout;

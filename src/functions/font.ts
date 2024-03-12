import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";

export const typePrimary = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-primary-poppins",
  display: "swap",
});

export const typeSecond = DM_Sans({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  subsets: ["latin"],
  variable: "--font-primary-dmSans",
  display: "swap",
});

import { Inter, JetBrains_Mono, Outfit, Unbounded } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-outfit",
});

export const unbounded = Unbounded({
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
  display: "swap",
  variable: "--font-unbounded",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

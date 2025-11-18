import localFont from "next/font/local";
import { Momo_Trust_Display } from "next/font/google";
import "./globals.css";

const neueHaasDisplay = localFont({
    src: [
        {
            path: "../assets/fonts/NeueHaasDisplayXXThin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayXXThinItalic.ttf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayXThin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayXThinItalic.ttf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayThin.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayThinItalic.ttf",
            weight: "200",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayLight.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayLightItalic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayRoman.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayRomanItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayMediu.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayMediumItalic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayBold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayBoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayBlack.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueHaasDisplayBlackItalic.ttf",
            weight: "900",
            style: "italic",
        },
    ],
    variable: "--font-neue-haas-display",
    display: "swap",
});

const momoTrustDisplay = Momo_Trust_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-momo-trust-display",
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${neueHaasDisplay.variable} ${momoTrustDisplay.variable} antialiased`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "none" }}
                >
                    <defs>
                        <filter
                            id="glass-distortion"
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                        >
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.008 0.008"
                                numOctaves="2"
                                seed="92"
                                result="noise"
                            />
                            <feGaussianBlur
                                in="noise"
                                stdDeviation="2"
                                result="blurred"
                            />
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="blurred"
                                scale="77"
                                xChannelSelector="R"
                                yChannelSelector="G"
                            />
                        </filter>
                    </defs>
                </svg>
                {children}
            </body>
        </html>
    );
}

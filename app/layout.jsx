import { Poppins } from "next/font/google"
import Header from "./components/header"
import "./globals.css"

// use nextjs to import the poppins font from google - pretty freaking sweet!
const poppins = Poppins({
    weight: ["400", "700"],
    subsets: ["latin"],
})

export const metadata = {
    title: "My Next 13 App",
    description: "Web development tutorials and courses",
    keywords:
        " web development, web design, javascript, react, next, html, css",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                <main className="container">{children}</main>
            </body>
        </html>
    )
}

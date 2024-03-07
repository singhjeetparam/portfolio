'use client'
import Header from "@/components/common/header/header"
import Footer from "@/components/common/footer/footer"

export default function HomeLayout({children}){
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}
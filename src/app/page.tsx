"use client"
import Footer from "../../components/footer/footer";
import Header from "../../components/headerr/header";
import ComTwo from "../../components/body/comTwo";
import ComThree from "../../components/body/comThree";
import ComFour from "../../components/body/comFour";
import Comfive from "../../components/body/comfive";
import Comsix from "../../components/body/comsix";
import Comseven from "../../components/body/comseven";
import Comeight from "../../components/body/comeight";

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <ComTwo />
            <ComThree />
            <ComFour />
            <Comfive />
            <Comsix />
            <Comseven />
            <Comeight />
            <Footer />
        </>
    )
}
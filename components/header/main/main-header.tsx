import './main-header.scss'

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container/container";

const MainHeader = () => {
    return (
        <div className="main-header">
            <Container>
                <div className="logo">
                    <Image src="/images/logo.png" alt="logo" width={222} height={149} />
                </div>
                <div className="link-pages">
                    <Link href="#">Home</Link>
                    <Link href="#">Sobre nós</Link>
                    <Link href="#">Ministérios</Link>
                    <Link href="#">Mensagens</Link>
                    <Link href="#">Galeria</Link>
                    <Link href="#">Contribua</Link>
                    <Link href="#">Contato</Link>
                </div>
            </Container>
        </div>
    )
}

export default MainHeader

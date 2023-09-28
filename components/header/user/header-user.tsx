import './header-user.scss'

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import Container from "@/components/container/container";

const HeaderUser = () => {
    return (
        <div className="header-user">
            <Container>
                <div className="info">
                    <div className="info-option">
                        <Image src="/icons/mail-icon.svg" alt="email" width={30} height={20} />
                        <span>igrejasaldaterra@gmail.com</span>
                    </div>
                    <div className="info-option">
                        <Image src="/icons/phone-icon.svg" alt="phone" width={30} height={20} />
                        <span>+55 83 99137-3612 </span>
                    </div>
                </div>
                <div className="authentication">
                    <div className="social-networks">
                        <Link href="#">
                            <Image src={"/icons/facebook-icon.svg"} alt="facebook" width={35} height={35} />
                        </Link>
                        <Link href="#">
                            <Image src={"/icons/youtube-icon.svg"} alt="youtube" width={35} height={35} />
                        </Link>
                        <Link href="#">
                            <Image src={"/icons/instagram-icon.svg"} alt="instagram" width={35} height={35} />
                        </Link>
                    </div>
                    <div className="login-register">
                        <Button.Group>
                            <Button.Root className="bg-secondary hover:bg-secondary-600">
                                <Button.Content>
                                    Login
                                </Button.Content>
                            </Button.Root>
                            <Button.Root className="bg-secondary hover:bg-secondary-600">
                                <Button.Content>
                                    Cadastro
                                </Button.Content>
                            </Button.Root>
                        </Button.Group>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderUser

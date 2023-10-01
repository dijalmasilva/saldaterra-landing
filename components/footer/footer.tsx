import Copyright from './copyright/copyright'
import Container from "@/components/container/container";
import Image from "next/image";
import Typography from "@/components/typography/typography";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="bg-primary w-full py-8 flex justify-center items-center">
                <Container>
                    <div className="flex flex-wrap md:flex-nowrap gap-8 lg:gap-2 xl:gap-16">
                        <Image className="hidden md:block" src="/images/logo.png" alt="logo" width={219} height={147} />
                        <div className="hidden lg:flex lg:flex-col justify-evenly lg:basis-4/12">
                            <div>
                                <Typography className="!text-white !text-sm italic">
                                    Um pouco de sal transforma a comida toda! Da mesma forma,
                                    você foi chamado para dar sabor ao mundo à sua volta.
                                </Typography>
                            </div>
                            <div>
                                <Typography className="!text-white !text-sm italic">
                                    Em tudo que você diz e faz, você pode ser uma bênção!
                                </Typography>
                            </div>
                        </div>
                        <div className="m-auto md:m-0 flex gap-2 items-baseline">
                            <Image src="/icons/pin-icon.svg" alt="pin-localizacao" width={14} height={16} />
                            <div className="flex flex-col justify-around h-full">
                                <Typography className="!text-white !text-sm">
                                    Sal da Terra - Cajazeiras
                                </Typography>
                                <div>
                                    <Typography className="!text-white !text-sm">
                                        Avenida Doutor Severino Cordeiro
                                    </Typography>
                                    <Typography className="!text-white !text-sm">
                                        Cajazeiras - Paraíba - 58900-000
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="m-auto md:m-0 gap-8 flex-col-reverse flex md:flex-col md:justify-around">
                            <div className="m-auto md:m-0 flex gap-4">
                                <Link href="#">
                                    <Image src="/icons/youtube-icon.svg" alt="youtube-icon" width={32} height={32} />
                                </Link>
                                <Link href="#">
                                    <Image src="/icons/facebook-icon.svg" alt="facebook-icon" width={32} height={32} />
                                </Link>
                                <Link href="#">
                                    <Image src="/icons/instagram-icon.svg" alt="instagram-icon" width={32} height={32} />
                                </Link>
                            </div>
                            <div>
                                <div className="flex gap-2">
                                    <Image src="/icons/mail-icon.svg" alt="mail-icon" width={20} height={14} />
                                    <Typography className="!text-white !text-sm">igrejasaldaterra@gmail.com</Typography>
                                </div>
                                <div className="flex gap-2">
                                    <Image src="/icons/phone-icon.svg" alt="phone-icon" width={20} height={14} />
                                    <Typography className="!text-white !text-sm">+55 (83) 99137-3612</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Copyright />
        </footer>
    )
}

export default Footer

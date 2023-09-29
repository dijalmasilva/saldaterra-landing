import Carrousel from "@/components/carrousel/carrousel";
import Section from "@/components/section/section";
import Button from "@/components/button";
import Typography from "@/components/typography/typography";
import SectionTitle from "@/components/section/title/section-title";
import Card from "@/components/card";

export default function Home() {
  return (
    <main>
      <Carrousel images={
          ['/photos/slide-1.png', '/photos/slide-2.png', '/photos/slide-3.png']
      } />
      <Section className="flex justify-center items-center bg-no-repeat bg-center bg-cover"
               style={{ backgroundImage: `url('/banners/banner-trigo.png')`}}
      >
            <div className="flex-col text-center gap-10">
                <Typography variant="h1">Conheça a nossa igreja</Typography>
                <div className="my-8">
                    <Typography variant="h4" className="!font-normal">Somos uma igreja guiada pela Luz,</Typography>
                    <Typography variant="h4" className="!font-normal">servindo com amor.</Typography>
                </div>
                <Button.Root className="bg-primary hover:bg-primary-600 m-auto">
                    <Button.Content>
                        Conheça a nossa visão
                    </Button.Content>
                </Button.Root>
            </div>
      </Section>
        <Section className="py-20">
            <div className="my-6">
                <SectionTitle title="Saiba mais sobre os cultos" subtitle="Programe-se e esteja conosco!" />
                <div className="flex gap-16 justify-center items-center mt-16">
                    <Card.Root>
                        <Card.Image image="/images/culto-1.jpg" />
                        <Card.Content className="text-center">
                            <Typography className="font-bold">Culto do Espírito Santo</Typography>
                            <Typography>Quinta-Feira às 19h30</Typography>
                        </Card.Content>
                        <Card.Actions>
                            <Button.Root className="bg-secondary m-auto hover:bg-secondary-600">
                                <Button.Content>Saiba Mais</Button.Content>
                            </Button.Root>
                        </Card.Actions>
                    </Card.Root>
                    <Card.Root>
                        <Card.Image image="/images/culto-2.jpg" />
                        <Card.Content className="text-center">
                            <Typography className="font-bold">Culto dos Jovens</Typography>
                            <Typography>Sábado às 19h00</Typography>
                        </Card.Content>
                        <Card.Actions>
                            <Button.Root className="bg-secondary m-auto hover:bg-secondary-600">
                                <Button.Content>Saiba Mais</Button.Content>
                            </Button.Root>
                        </Card.Actions>
                    </Card.Root>
                    <Card.Root>
                        <Card.Image image="/images/culto-3.jpg" />
                        <Card.Content className="text-center">
                            <Typography className="font-bold">Culto da Família</Typography>
                            <Typography>Domingo as 19h00</Typography>
                        </Card.Content>
                        <Card.Actions>
                            <Button.Root className="bg-secondary m-auto hover:bg-secondary-600">
                                <Button.Content>Saiba Mais</Button.Content>
                            </Button.Root>
                        </Card.Actions>
                    </Card.Root>
                </div>
            </div>
            <div className="mt-24">
                <SectionTitle title="Eventos e festividades" subtitle="Fique por dentro da nossa agenda!" />
                <div className="flex gap-16 justify-center items-center mt-16">
                    <Card.Root>
                        <Card.Image image="/images/evento-1.jpg" />
                        <Card.Content className="text-center">
                            <Typography className="font-bold">Cinema da Sal</Typography>
                        </Card.Content>
                        <Card.Actions>
                            <Button.Root className="bg-secondary m-auto hover:bg-secondary-600">
                                <Button.Content>Saiba Mais</Button.Content>
                            </Button.Root>
                        </Card.Actions>
                    </Card.Root>
                    <Card.Root>
                        <Card.Image image="/images/evento-2.jpg" />
                        <Card.Content className="text-center">
                            <Typography className="font-bold">Grupo de mulhers</Typography>
                        </Card.Content>
                        <Card.Actions>
                            <Button.Root className="bg-secondary m-auto hover:bg-secondary-600">
                                <Button.Content>Saiba Mais</Button.Content>
                            </Button.Root>
                        </Card.Actions>
                    </Card.Root>
                    <Card.Root>
                        <Card.Image image="/images/evento-3.jpeg" />
                        <Card.Content className="text-center">
                            <Typography className="font-bold">Grupo de evangelismo</Typography>
                        </Card.Content>
                        <Card.Actions>
                            <Button.Root className="bg-secondary m-auto hover:bg-secondary-600">
                                <Button.Content>Saiba Mais</Button.Content>
                            </Button.Root>
                        </Card.Actions>
                    </Card.Root>
                </div>
            </div>
        </Section>
        <Section className="flex justify-end items-center bg-no-repeat bg-center bg-cover"
                 style={{ backgroundImage: `url('/banners/banner-trigo-hand.png')`}}
        >
            <div className="flex-col text-center gap-10">
                <Typography variant="h1">Grupo de células</Typography>
                <div className="my-8">
                    <Typography variant="h4" className="!font-normal">Encontre e faça parte de</Typography>
                    <Typography variant="h4" className="!font-normal">uma célula.</Typography>
                </div>
                <Button.Root className="bg-primary hover:bg-primary-600 m-auto">
                    <Button.Content>
                        Encontre um grupo
                    </Button.Content>
                </Button.Root>
            </div>
        </Section>
        <Section className="flex justify-end items-center">
            <div className="flex-col">
                <Typography variant="h1">Contribuições</Typography>
                <Typography variant="h4" className="!font-normal max-w-2xl italic mt-8">
                    Cada um dê conforme determinou em seu coração,
                    não com pesar ou por obrigação, pois Deus ama quem dá com alegria.
                </Typography>
                <Typography className="font-bold text-3xl mt-8" variant="h5">2 Coríntios 9:7</Typography>
                <Button.Root className="bg-primary hover:bg-primary-600 m-auto mt-8">
                    <Button.Content>
                        Faça a sua contribuição
                    </Button.Content>
                </Button.Root>
            </div>
        </Section>
    </main>
  )
}

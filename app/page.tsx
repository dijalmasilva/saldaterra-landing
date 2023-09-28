import Carrousel from "@/components/carrousel/carrousel";
import Section from "@/components/section/section";
import Button from "@/components/button";
import Typography from "@/components/typography/typography";

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
                    <Typography variant="h4" className="!font-normal"   >servindo com amor.</Typography>
                </div>
                <Button.Root className="bg-primary hover:bg-primary-600 m-auto">
                    <Button.Content>
                        Conheça a nossa visão
                    </Button.Content>
                </Button.Root>
            </div>
      </Section>
    </main>
  )
}

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
// import { Offices } from '@/components/Offices'
import clsx from 'clsx'
import Image from 'next/image'
import imageSendMail from '@/images/new/send-mail.svg'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className={clsx(
        "-mx-6 rounded-4xl px-6 py-20 sm:mx-0 sm:py-32 md:px-12",
        "bg-gradient-2",
        "relative",
        "overflow-hidden"
      )}>
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display font-medium text-white [text-wrap:balance] text-3xl sm:text-4xl">
              Tell us about your project
            </h2>

            <div className="mt-6 flex">
              <Button href="/contact" invert large>
                Say hi<span className="ml-4">👋</span>
              </Button>
            </div>

            <div className={clsx(
              "absolute",
              "-bottom-[96px]",
              "-right-[275px] md:-right-[250px]",
              "w-[608px]",
              "opacity-0 sm:opacity-100 transition-opacity duration-300"
            )}>
              <Image src={imageSendMail} alt="Man sending mail" unoptimized />
            </div>

            {/* <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div> */}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

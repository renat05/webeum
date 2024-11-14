import { type Metadata } from 'next'
import Image from 'next/image'
// import Link from 'next/link'
import clsx from 'clsx'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageServices from '@/images/new/image-services.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className={clsx(
      "mt-24 rounded-4xl py-20 sm:mt-32 sm:py-32 lg:mt-56",
      "bg-gradient-1"
    )}>
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with amazing people
          </h2>
          <div className="h-px flex-auto bg-white opacity-30" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        highlightWords='brighter'
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className={clsx(
                "relative flex w-full flex-col rounded-3xl",
                "p-6 sm:p-8 !pt-0",
                "transition-all duration-300",
                // "ring-1 ring-brand-charcoal/30 hover:ring-brand-red",
                "bg-brand-charcoal/5 hover:bg-gradient-2",
                "group"
              )}>
                {/* <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3> */}

                <div className={clsx(
                  "-mx-6 -mt-[1px] sm:-mx-8",
                  "overflow-hidden rounded-t-3xl",
                  "grayscale-[66%] group-hover:grayscale-0"
                )}>
                  <Image src={caseStudy.imageCard.src} alt="Alt text should come from .mdx data" unoptimized />
                </div>

                <p className={clsx(
                  "mt-6 flex gap-x-2 text-sm text-brand-charcoal",
                  "transition-all duration-300",
                  "group-hover:text-white"
                )}>
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span
                    className={clsx(
                      "text-brand-charcoal opacity-30",
                      "transition-all duration-300",
                      "group-hover:text-white group-hover:opacity-60"
                    )}
                    aria-hidden="true">
                    /
                  </span>
                  <span>Case study coming soon</span>
                </p>

                <p className={clsx(
                  "mt-6 font-display text-2xl font-semibold text-brand-charcoal",
                  "transition-all duration-300",
                  "group-hover:text-white"
                )}>
                  {caseStudy.title}
                </p>

                {/* <p className={clsx(
                  "mt-4 text-base text-brand-grey",
                  "transition-all duration-300",
                  "group-hover:text-white"
                )}>
                  {caseStudy.description}
                </p> */}
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        highlightWords='respond'
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          {/*<div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div> */}

          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[40rem]">
              <div className={clsx(
                "rounded-4xl overflow-hidden",
                "grayscale-[75%] hover:grayscale-0"
              )}>
                <Image src={imageServices} alt="Alt text" unoptimized />
              </div>
            </FadeIn>
          </div>

          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-brand-charcoal [text-wrap:balance] sm:text-7xl">
            We create awesome digital tools to help you <span className="text-brand-red">grow</span> your business.
          </h1>
          <p className="mt-6 text-xl text-brand-grey">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </>
  )
}

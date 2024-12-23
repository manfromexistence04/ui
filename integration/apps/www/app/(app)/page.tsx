import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { RoundSpinner, SpokeSpinner } from "@/components/spinner"
import CardsNewYork from "@/registry/new-york/example/cards"
import { Button } from "@/registry/new-york/ui/button"

export default function IndexPage() {
  return (
    <div className="container relative">
      {/* <h1>Spinner</h1> */}
      {/* <SpokeSpinner />
      <RoundSpinner /> */}

      {/* <Spinner size="sm" className="bg-black dark:bg-white" /> */}

      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/cards-light.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="block dark:hidden"
        />
        <Image
          src="/examples/cards-dark.png"
          width={1280}
          height={1214}
          alt="Cards"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block [&>div]:p-0">
        <CardsNewYork />
      </section>
    </div>
  )
}

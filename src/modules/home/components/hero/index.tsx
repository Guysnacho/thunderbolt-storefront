import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4 my-auto">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="tracking-tight text-5xl text-blue-900 sm:text-6xl">
                  Qautos Preowned
                </h1>
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                      New & Improved
                    </span>
                  </a>
                </div>
                <h2 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  It&apos;s not the destination, it&apos;s how you get there!
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Welcome to QAutos Preowned, where quality meets affordability
                  in every vehicle we offer. Whether you&apos;re seeking a sleek
                  sedan, a rugged SUV, or a versatile truck, our diverse
                  inventory has something for every taste and need.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <LocalizedClientLink
                    href="/store"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    data-testid="hero-to-store-link"
                  >
                    View our Listings <span aria-hidden="true">→</span>
                  </LocalizedClientLink>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-blue-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative pl-6 pt-8 sm:pl-16 sm:py-16 md:pl-16 -mr-5">
                  <div className="flex flex-row-reverse max-w-2xl md:mx-0 md:max-w-none overflow-hidden">
                    <Image
                      className="rounded-lg justify-end"
                      width={500}
                      height={400}
                      alt="Hero Image of a car. Prometheus 🔥 (@iamateapot)"
                      about="Hero Image of a car. Prometheus 🔥 (@iamateapot)"
                      src="https://qvhnswvfglazvefaplac.supabase.co/storage/v1/object/public/assets/HeroCar.jpg"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}

export default Hero

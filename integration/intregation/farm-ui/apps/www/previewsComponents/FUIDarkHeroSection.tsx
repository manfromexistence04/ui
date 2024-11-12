import React from "react";
import clsx from "clsx";

export default function FUIDarkHeroSection() {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <div className="relative min-h-screen">
      <Container className="relative  py-20 sm:pb-24 sm:pt-36">
        <img
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
          className="absolute z-2 -top-0 left-10"
        />

        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-geist text-5xl font-normal  tracking-tighter  bg-gradient-to-r from-zinc-100 via-stone-200/50 to-purple-200/70 bg-clip-text  text-transparent sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span>A design conference
            for the dark side.
          </h1>
          <div className="mt-6 space-y-6 font-geist text-md sm:text-xl tracking-tight text-gray-500">
            <p>
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union.
            </p>
            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
          </div>
          <a href="https://farmui.com/templates/sharps" target="_blank">
            <button className="flex gap-2 justify-center items-center py-2 px-10 mt-5 text-lg tracking-tighter text-center bg-gradient-to-br rounded-md ring-2 ring-offset-2 transition-all hover:ring-transparent group/button w-fit from-zinc-100 to-zinc-300 font-geist text-md text-zinc-900 ring-zinc-500/80 ring-offset-zinc-950 hover:scale-[1.02] active:scale-[0.98] active:ring-zinc-500/70">
              Buy the full template
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:[animation-delay:.2s] group-hover/button:animate-shineButton rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)]"
              />
            </button>
          </a>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Speakers", "18"],
              ["People Attending", "2,091"],
              ["Venue", "Staples Center"],
              ["Location", "Los Angeles"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-gray-300">{name}</dt>
                <dd className="mt-0.5 text-2xl font-normal font-geist tracking-tight text-gray-300">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
      </Container>
      
    </div>
  );
}

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

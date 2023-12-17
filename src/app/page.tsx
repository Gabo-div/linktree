import { mediaLinks, buttonLinks } from "@/links";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import MediaLink from "@/components/MediaLink";

export default function Home() {
  return (
    <div className="relative p-8 min-h-screen mx-auto max-w-xl flex flex-col items-center justify-center">
      <main className="w-full flex flex-col items-center">
        <div className="flex w-full flex-col items-center">
          <Image src="/me.png" alt="Me" width={200} height={200} className="rounded-full " />
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
            Gabriel H<span className="text-red-300">.</span> Vallés
          </h1>
          <div className="mt-1 text-sm sm:text-base">Desarrollador Web Full-Stack</div>
        </div>

        <div className="mt-4 w-full flex space-x-6 items-center justify-center">
          {mediaLinks.map((link) => (
            <MediaLink key={link.href} {...link} />
          ))}
        </div>

        <div className="mt-8 w-full flex flex-col space-y-5 items-center">
          {buttonLinks.map((link) => (
            <ButtonLink key={link.href} {...link} />
          ))}
        </div>
      </main>
    </div>
  );
}

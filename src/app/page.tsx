import { Card } from "@/components/home/card";
import { ProfileForm } from "@/components/home/login-form";
import { Navbar } from "@/components/home/navbar";
import { Sec1 } from "../../public/assets/sec1";
import { Sec2 } from "../../public/assets/sec2";
import { Sec3 } from "../../public/assets/sec3";
import { Sec4 } from "../../public/assets/sec4";
import { FaqDropdown } from "@/components/home/faq-dropdown";
import { HyperLink } from "@/components/home/hyper-link";
import { LangButton } from "@/components/utils/lang-button";

export default function Home() {
  return (
    <div className="w-full h-full text-white bg-black">
      <header className="w-full h-screen bg-heroImage bg-center bg-cover">
        <div className="w-full h-full bg-gradient-to-b from-black via-black/60 to-black">
          <div className="flex flex-col w-full h-full px-6 netflixMd:px-8">
            <Navbar />
            <div className="h-full flex flex-col items-center justify-center">
              <h1 className="mb-2 text-center font-bold text-[32px]">
                Unlimited movies, TV shows and more
              </h1>
              <p className="mb-4">Starts at ₹149. Cancel at any time.</p>
              <div className="flex flex-col items-center">
                <ProfileForm />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full pb-20 px-6 border-t-4 border-pink-700 rounded-sm space-y-14">
        <section>
          <h2>Trending Now</h2>
        </section>

        <section>
          <h2 className="mb-3 font-semibold">More reasons to join</h2>
          <div className="space-y-2">
            <Card
              title="Enjoy on your TV"
              description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            >
              <Sec1 />
            </Card>
            <Card
              title="Download your shows to watch offline"
              description="Save your favourites easily and always have something to watch."
            >
              <Sec2 />
            </Card>
            <Card
              title="Watch everywhere"
              description="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
            >
              <Sec3 />
            </Card>
            <Card
              title="Create profiles for kids"
              description="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
            >
              <Sec4 />
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-3">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FaqDropdown question="What is Netflix?">
              <p>
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There&apos;s always something new to discover, and new TV shows and movies are added every week!
              </p>
            </FaqDropdown>

            <FaqDropdown question="How much does Netflix cost?">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
              </p>
            </FaqDropdown>

            <FaqDropdown question="Where can I watch?">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.
              </p>
              <p>
                You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you&apos;re on the go and without an internet connection. Take Netflix with you anywhere.
              </p>
            </FaqDropdown>

            <FaqDropdown question="How do I cancel?">
              <p>
                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
              </p>
            </FaqDropdown>

            <FaqDropdown question="What can I watch on Netflix?">
              <p>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
              </p>
            </FaqDropdown>

            <FaqDropdown question="Is Netflix good for kids?">
              <p>
                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
              </p>
              <p>
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
              </p>
            </FaqDropdown>
          </div>
        </section>

        <section className="flex flex-col">
          <ProfileForm />
        </section>

        <footer>
          <p className="mb-10 text-[#A4A5A4]">
            Questions? Call 000-800-919-1743
          </p>
          <div className="mb-10 grid text-[#A4A5A4] space-y-3 grid-cols-1 md:grid-cols-2">
            <HyperLink title="FAQ" href="#" />
            <HyperLink title="Help Centre" href="#" />
            <HyperLink title="Account" href="#" />
            <HyperLink title="Media Centre" href="#" />
            <HyperLink title="Investor Relations" href="#" />
            <HyperLink title="Jobs" href="#" />
            <HyperLink title="Ways to Watch" href="#" />
            <HyperLink title="Terms of Use" href="#" />
            <HyperLink title="Privacy" href="#" />
            <HyperLink title="Cookie Preferences" href="#" />
            <HyperLink title="Corporate Information" href="#" />
            <HyperLink title="Contact Us" href="#" />
            <HyperLink title="Speed Test" href="#" />
            <HyperLink title="Legal Notices" href="#" />
            <HyperLink title="Only on Netflix" href="#" />
          </div>
          <div className="mb-8">
            <LangButton />
          </div>
          <p>Netflix India</p>
        </footer>
      </div>
    </div>
  );
}

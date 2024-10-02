import Image from "next/image";
import PhotoFrame from "../public/assets/frame.png";
import Countdown from "@/components/countdown";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto font-raleway space-y-10 my-12 px-4">
      <Image src={PhotoFrame} alt="Frame" height={250} className="mx-auto" />
      <div className="text-center">
        <p className="font-raleway tracking-widest">You are invited to my</p>
        <p className="font-eb-garamond font-semibold text-4xl sm:text-5xl tracking-[0.2em]">
          GRADUATION
        </p>
        <p className="font-meddon text-2xl sm:text-3xl">ceremony</p>
      </div>

      <div className="text-center space-y-2">
        <p>Please join us for a graduation party honoring</p>
        <p className="font-arsenica font-medium tracking-wider text-3xl sm:text-4xl">
          ANDREW NGUYEN
        </p>
      </div>

      <div className="text-center">
        <p>October 26th, 2024 at around 3.30pm</p>
        <p>
          Western Sydney University Parramatta South campus (
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Western+Sydney+University+Parramatta+Campus/@-33.812305,151.026113,16z/data=!4m6!3m5!1s0x6b12a37b8e267321:0x42015d5ee84d7799!8m2!3d-33.8118321!4d151.0251472!16s%2Fm%2F01026wct?hl=en&entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
          >
            map
          </a>
          )
        </p>
      </div>

      <div id="countdown-timer">
        <Countdown />
      </div>

      <div className="text-center">
        <p>
          Your presence will make this day truly memorable. We look forward to
          sharing this special moment with youuu.
        </p>
      </div>

      <div id="faq" className="flex items-center justify-center">
        <ul>
          <li className="text-sm">
            &gt;{" "}
            <Dialog>
              <DialogTrigger className="link">How to get there?</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <h3>🛞 Drive</h3>
                    <p className="mb-2">
                      Western Sydney University graduation ceremonies are held
                      in the Sir Ian and Nancy Turbutt Auditorium (Building EE)
                      on the Parramatta South Campus. Access to the campus is
                      via Cnr James Ruse Drive and Victoria Road, Rydalmere.
                    </p>
                    <p className="mb-2">
                      During graduations, free parking is available on campus
                      for you and your guests. Please ensure you arrive early as
                      there is limited parking available on the Parramatta South
                      campus and, if the campus parking is full, you may be
                      directed to park on the Parramatta North site and catch a
                      shuttle bus or walk from there.   
                    </p>
                    <h3>🚌 Public Transport</h3>
                    <p className="mb-2">
                      Catch the train to Parramatta station, then it’s a short
                      walk to our Parramatta City campus at 169 Macquarie
                      Street. You can wait in front of{" "}
                      <a href="https://www.google.com/maps/place/Mikazuki+Parramatta/@-33.8162701,151.0056806,20.25z/data=!3m1!5s0x6b12a31fece225ab:0xc1f882a41ea8a222!4m6!3m5!1s0x6b12a31f50458ee3:0x1e5d95ad08799c7c!8m2!3d-33.8161474!4d151.0058201!16s%2Fg%2F11g6zgwwv3?hl=en&entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D">
                        Mikazuki Restaurant
                      </a>
                      .
                    </p>
                    <p className="mb-2">
                      From there, the free shuttle bus will take you to
                      Parramatta South campus.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </li>
          <li className="text-sm">
            &gt;{" "}
            <a
              target="_blank"
              href="https://www.westernsydney.edu.au/content/dam/digital/pdf/campus-maps/Parramatta_Campus_General.pdf"
            >
              Campus map
            </a>
          </li>
          <li className="text-sm">
            &gt;{" "}
            <Dialog>
              <DialogTrigger className="link">What to bring?</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription className="space-y-2">
                    <h3>What to bring?</h3>
                    <p>
                      <span className="font-semibold">
                        🎉 Your party spirit
                      </span>{" "}
                      – We&apos;re celebrating! So bring your best mood, and
                      let&apos;s make some memories.
                    </p>
                    <p>
                      <span className="font-semibold">🎁 Optional gifts</span> –
                      Only if you insist, but your presence is the{" "}
                      <span className="font-semibold">real gift!</span>
                    </p>
                    <p>
                      <span className="font-semibold">
                        📸 A camera or full charged phone
                      </span>{" "}
                      – Get ready for endless photos (and don&apos;t forget to
                      tag me!).
                    </p>
                    <p>
                      <span className="font-semibold">🥳 Your appetite</span> –
                      Because the snacks will be delicious!
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-xs text-gray-700">[ english | <a href="/vi">vietnamese</a> ]</p>
      </div>
    </div>
  );
}

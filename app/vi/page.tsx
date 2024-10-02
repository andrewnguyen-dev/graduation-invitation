import Image from "next/image";
import PhotoFrame from "../../public/assets/frame.png";
import CountdownVi from "@/components/countdown-vi";

export default function Vi() {
  return (
    <div
      lang="vi"
      className="max-w-lg mx-auto font-raleway space-y-10 my-12 px-4"
    >
      <Image src={PhotoFrame} alt="Frame" height={250} className="mx-auto" />
      <div className="text-center">
        <p className="font-raleway tracking-widest">
          Trân trọng kính mời bạn đến dự
        </p>
        <p className="font-eb-garamond font-semibold mt-2 text-3xl sm:text-4xl tracking-[0.2em]">
          LỄ TỐT NGHIỆP
        </p>
      </div>

      <div className="text-center space-y-2">
        <p>của</p>
        <p className="font-arsenica font-medium tracking-wider text-3xl sm:text-4xl">
          THA&apos;I MINH <span className="text-2xl">aka EKE MINH</span>
        </p>
      </div>

      <div className="text-center">
        <p>15h30 thứ Bảy ngày 26/10/2024</p>
        <p>
          tại Western Sydney University Parramatta South campus <br /> (
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Western+Sydney+University+Parramatta+Campus/@-33.812305,151.026113,16z/data=!4m6!3m5!1s0x6b12a37b8e267321:0x42015d5ee84d7799!8m2!3d-33.8118321!4d151.0251472!16s%2Fm%2F01026wct?hl=en&entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D"
          >
            Google Map
          </a>
          )
        </p>
      </div>

      <div id="countdown-timer">
        <CountdownVi />
      </div>

      <div className="text-center">
        <p>
          Sự có mặt của quý bạn và các vị là món quà tinh thần không thể to nớn hơn
          dành cho tớoo.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-xs text-gray-700">[ <a href="/">english</a> | vietnamese ]</p>
      </div>
    </div>
  );
}

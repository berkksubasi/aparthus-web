import Image from 'next/image';
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // İkonlar için

export default function MainSection(): JSX.Element {
  return (
    <section className="w-full pt-32 pb-16 md:py-32 lg:py-40 bg-gray-900 text-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Modern Apartman Yönetimi için Akıllı Çözüm
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aidat yönetimi, iç iletişim ve harcama takibini dijitalleştirerek site ve apartman yönetimini kolaylaştırıyoruz.
            </p>
           
            {/* Store Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.aparthus.app" // Play Store URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FFD200] text-black px-4 py-2 rounded-lg hover:text-white hover:bg-[#FFD200]/90 transition"
              >
                <FaGooglePlay className="text-lg" />
                <span>Google Play</span>
              </a>
              <a
                href="https://apps.apple.com/us/app/aparthus-apartman-y%C3%B6netimi/id6739287819" // App Store URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
              >
                <FaApple className="text-lg" />
                <span>App Store</span>
              </a>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center lg:max-w-none">
            <Image
              src="/images/placeholder.png"
              alt="Aparthus App Screenshot"
              width={800}
              height={1000}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

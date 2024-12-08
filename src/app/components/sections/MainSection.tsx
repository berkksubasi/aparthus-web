import Image from 'next/image'
import { Button } from '../ui/Button'

export default function MainSection(): JSX.Element {
  return (
    <section className="w-full pt-32 pb-16 md:py-32 lg:py-40 bg-gray-900 text-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Modern Apartman Yönetimi için Akıllı Çözüm</h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aidat yönetimi, iç iletişim ve harcama takibini dijitalleştirerek site ve apartman yönetimini kolaylaştırıyoruz.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-[#FFD200] text-gray-900 hover:bg-[#FFD200]/90" size="lg">Hemen Başla</Button>
              <Button className="text-gray-900 hover:text-white" variant="outline" size="lg">Demo İzle</Button>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center lg:max-w-none">
            <Image src="/images/placeholder.png" alt="Aparthus App Screenshot" width={800} height={1000} className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

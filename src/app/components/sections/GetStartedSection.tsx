import { Button } from "../ui/Button";

export default function GetStartedSection(): JSX.Element {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        {/* Başlık ve Açıklama */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Hemen Başlayın
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-300 md:text-lg/relaxed lg:text-xl/relaxed mt-4 mb-8">
          Ücretsiz deneme süreniz sizi bekliyor. Aparthus'un sunduğu avantajlardan hemen yararlanmaya başlayın.
        </p>
        
        {/* CTA Butonları */}
        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <Button className="bg-[#FFD200] text-gray-900 hover:text-white hover:bg-[#FFD200]/90 px-8 py-4 text-lg rounded-md shadow-lg">
            Ücretsiz Dene
          </Button>
          <Button
            variant="outline"
            className="border border-[#FFD200] text-[#FFD200] hover:bg-[#FFD200] hover:text-white px-8 py-4 text-lg rounded-md shadow-lg"
          >
            Fiyatları Gör
          </Button>
        </div>
      </div>
    </section>
  );
}

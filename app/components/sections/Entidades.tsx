import Image from "next/image";

export default function Entidades() {
  return (
    <section className="p-4 flex flex-col gap-8">
      
      <h2 className="text-text-primary text-heading-2">
        Entidades con las que trabajamos
      </h2>

      {/* Dardo solo arriba */}
      <div className="flex justify-center">
        <Image
          src="/Dardo.webp"
          alt="Asociación Mutual Dardo Rocha"
          width={340}
          height={42}
          className="w-full max-w-[340px] h-auto object-contain grayscale opacity-70"
        />
      </div>

      {/* Resto en grid */}
      <div className="grid grid-cols-2 gap-6 items-center">
        
        <div className="flex justify-center">
          <Image
            src="/RedMutual.webp"
            alt="Red Mutual"
            width={200}
            height={80}
            className="h-10 w-auto object-contain grayscale opacity-70"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/CR-1.webp"
            alt="Crédito Regional"
            width={300}
            height={120}
            className="h-10 w-auto object-contain grayscale opacity-70"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/Vento-1.webp"
            alt="Vento Capital"
            width={220}
            height={90}
            className="h-10 w-auto object-contain grayscale opacity-70"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/Argenpesos.webp"
            alt="Argenpesos"
            width={180}
            height={60}
            className="h-10 w-auto object-contain grayscale opacity-70"
          />
        </div>

      </div>
    </section>
  );
}
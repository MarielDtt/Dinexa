import Image from "next/image";

export default function Entidades() {
  return (
    <section className="p-4 flex flex-col gap-8 lg:max-w-[1200px] lg:mx-auto lg:px-8 lg:gap-12">
      <h2 className="text-text-primary text-heading-2">
        Entidades con las que trabajamos
      </h2>

      {/* Dardo solo arriba */}
      <div className="flex justify-center lg:mt-2 lg:mb-2">
        <Image
          src="/Dardo.webp"
          alt="Asociación Mutual Dardo Rocha"
          width={560}
          height={80}
          className="w-full max-w-[340px] lg:max-w-[460px] h-auto object-contain grayscale opacity-70"
        />
      </div>

      {/* Resto en grid */}
      <div className="grid grid-cols-2 gap-6 items-center lg:grid-cols-4 lg:gap-10 lg:mt-2">
        <div className="flex justify-center items-center lg:h-20">
          <Image
            src="/RedMutual.webp"
            alt="Red Mutual"
            width={240}
            height={100}
            className="h-10 lg:h-12 w-auto object-contain grayscale opacity-70"
          />
        </div>

        <div className="flex justify-center items-center lg:h-20">
          <Image
            src="/CR-1.webp"
            alt="Crédito Regional"
            width={320}
            height={120}
            className="h-10 lg:h-13 w-auto object-contain grayscale opacity-70"
          />
        </div>

        <div className="flex justify-center items-center lg:h-20">
          <Image
            src="/vento-1.webp"
            alt="Vento Capital"
            width={240}
            height={100}
            className="h-10 lg:h-12 w-auto object-contain grayscale opacity-70"
          />
        </div>

        <div className="flex justify-center items-center lg:h-20">
          <Image
            src="/Argenpesos.webp"
            alt="Argenpesos"
            width={220}
            height={80}
            className="h-10 lg:h-12 w-auto object-contain grayscale opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  volume: string;
  image: string;
}

export default function ProductCard({ name, price, volume, image }: ProductCardProps) {
  return (
    <div className="group relative flex w-[280px] cursor-pointer flex-col rounded-lg p-4 transition-transform hover:scale-105">
      <div className="mb-4 relative aspect-square">
        <Image
          src={image}
          alt={name}
          layout="fill" 
          objectFit="contain" 
          className="rounded-lg"
        />
      </div>
      <h3 className="mb-2 text-lg font-medium text-white">{name}</h3>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-[#E67E22]">
          ${price.toFixed(2)}
        </span>
        <span className="text-sm text-gray-400">{volume}</span>
      </div>
    </div>
  );
}

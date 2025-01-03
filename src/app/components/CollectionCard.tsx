import Image from 'next/image';

interface CollectionCardProps {
  title: string;
  image: string;
  className?: string;
}

export default function CollectionCard({ title, image, className }: CollectionCardProps) {
  return (
    <div className={`group ${className} relative cursor-pointer overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        layout="fill"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 z-10">
        <h3 className="text-xl font-semibold text-white transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          {title}
        </h3>
      </div>

      {/* Wave Effect */}
      <div className="absolute inset-0 bg-ripple group-hover:animate-ripple pointer-events-none" />
    </div>
  );
}


  
  
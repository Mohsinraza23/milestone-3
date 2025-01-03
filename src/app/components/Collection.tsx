import CollectionCard from './CollectionCard';

const collections = [
  {
    id: 1,
    title: 'Designer Delights Collection',
    image: '/pp.png',
  },
  {
    id: 2,
    title: 'Travel Essentials Collection',
    image: '/ppp.png',
  },
  {
    id: 3,
    title: 'Special Occasions Collection',
    image: '/pp2.png',
  },
  {
    id: 4,
    title: 'Seasonal Sensations Collection',
    image: '/np4.png',
  },
  {
    id: 5,
    title: 'Vintage Treasures Collection',
    image: '/np3.png',
  },
  {
    id: 6,
    title: 'Limited Edition Treasures',
    image: '/limited-edition.png',
  },
  {
    id: 7,
    title: 'Modern Classic Collection',
    image: '/modern-classic.png',
  },
  {
    id: 8,
    title: 'Modern Classic Collection',
    image: '/np.png',
  },
  {
    id: 9,
    title: 'Modern Classic Collection',
    image: '/np2.png',
  },
];

export default function Collections() {
  return (
    <section className="bg-black px-4 py-16 bg-opacity-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-[#E67E22]">
          Our Collections
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              title={collection.title}
              image={collection.image}
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}



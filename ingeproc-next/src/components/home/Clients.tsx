import Image from 'next/image';

const clients = [
  { name: 'Siemens', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg', width: 150, height: 40 },
  { name: 'Schneider Electric', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Schneider_Electric_2012_logo.svg/1200px-Schneider_Electric_2012_logo.svg.png', width: 180, height: 40 },
  { name: 'BTicino', logoUrl: 'https://www.bticino.com.pe/wp-content/uploads/2021/07/logo-BTicino.png', width: 150, height: 40 },
  { name: 'Cushman & Wakefield', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Cushman_%26_Wakefield_logo.svg/2560px-Cushman_%26_Wakefield_logo.svg.png', width: 200, height: 40 },
];

export default function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Nuestros Partners</h2>
          <p className="mt-4 text-lg text-gray-600">
            Trabajamos con las marcas líderes en la industria eléctrica y de automatización.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.logoUrl}
                alt={`${client.name} Logo`}
                width={client.width}
                height={client.height}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

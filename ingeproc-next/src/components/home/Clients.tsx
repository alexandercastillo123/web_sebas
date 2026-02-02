import Image from 'next/image';

const clients = [
  { name: 'AECORP', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/AECORP.png' },
  { name: 'Alpina', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/Alpina.png' },
  { name: 'Andina Medica', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/Andina-medica.jpg' },
  { name: 'Binswanger', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/Binswan.png' },
  { name: 'Cushman & Wakefield', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/cushman.png' },
  { name: 'San Fernando', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/san-fernando.png' },
  { name: 'Todo Lana', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/todo-lana.png' },
  { name: 'Siemens', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg' },
  { name: 'Schneider Electric', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Schneider_Electric_2012_logo.svg' },
  { name: 'BTicino', logoUrl: 'https://expert-themes.com/html/wilcon/images/clients/1.png' }, // Placeholder from another site if needed, or stick to wikimedia
  { name: 'Legrand', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Legrand_Logo.svg/2560px-Legrand_Logo.svg.png' },
];

export default function Clients({ title = "Nuestros Partners" }: { title?: string }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary uppercase tracking-tight">{title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110">
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

type CoreSquadMember = {
  name: string;
  title?: string;
  profession?: string;
  image: string;
};

type CoreSquadProps = {
  members: CoreSquadMember[];
};

const CoreSquad = ({ members }: CoreSquadProps) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 p-2 h-200 md:h-full">
      {members.map((member) => (
        <div key={member.name} className="group flex w-full h-full flex-col">
          <div className="relative flex-1 overflow-hidden rounded-[1.6rem]">
            <Image
              unoptimized
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 cursor-pointer"
            />
            <div className="absolute inset-0 bg-[#010101]/25 transition-colors duration-300 md:bg-[#010101]/15 md:group-hover:bg-[#010101]/45" />

            <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center text-white transition-all duration-300 md:block md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              <p className="text-sm font-bold leading-tight">{member.name ?? 'Title'}</p>
              <p className="text-xs font-medium text-white/90">{member.title ?? 'title'}</p>
            </div>
          </div>

          <div className="mt-2 text-center md:hidden py-4">
            <p className="text-xl font-bold leading-tight text-[#010101]">
              {member.title ?? 'Title'}
            </p>
            <p className="text-md font-medium text-[#6b6b6b]">
              {member.profession ?? 'Profexxion'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreSquad;

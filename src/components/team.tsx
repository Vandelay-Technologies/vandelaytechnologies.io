import Image from 'next/image'

const members = [
    {
        name: 'David Barclay',
        role: 'Co-Founder // Lead',
        avatar: '/team/david.png',
    },
    {
        name: 'Marius Krasauskas',
        role: 'Co-Founder // Lead',
        avatar: '/team/marius.png',
    },
    {
        name: 'Tomas Buelow',
        role: 'Co-Founder // Operations',
        avatar: '/team/tom.png',
    },
    {
        name: 'Ally Polishchuk',
        role: 'Strategy',
        avatar: '/team/ally.png',
    },
    {
        name: 'Rico Soriano',
        role: 'Marketing',
        avatar: '/team/rico.png',
    },
]

export default function TeamSection() {
    return (
        <section id="team" className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Leadership</h3>
                    <div className="grid grid-cols-1 gap-8 border-t py-6 sm:grid-cols-2 md:grid-cols-3">
                        {members.map((member, index) => (
                            <div 
                                key={index} 
                                className={`${
                                    index === 4 ? 'sm:col-start-2 md:col-start-2' : 
                                    index === 3 ? 'sm:col-start-1 md:col-start-1' : ''
                                }`}
                            >
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <Image 
                                        className="aspect-square rounded-full object-cover" 
                                        src={member.avatar} 
                                        alt={member.name} 
                                        width={160} 
                                        height={160}
                                        loading="lazy"
                                    />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

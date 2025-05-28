import Image from 'next/image'

const members = [
    {
        name: 'David Barclay',
        role: 'Co-Founder // Lead',
        avatar: '/team/david.png',
        linkedin: 'https://www.linkedin.com/in/david-barclay1/'
    },
    {
        name: 'Marius Krasauskas',
        role: 'Co-Founder // Tech',
        avatar: '/team/marius.png',
        linkedin: 'https://www.linkedin.com/in/mariuskrasauskas/'
    },
    {
        name: 'Tomas Buelow',
        role: 'Co-Founder // Operations',
        avatar: '/team/tom.png',
        linkedin: 'https://www.linkedin.com/in/tom-buelow/'
    },
    {
        name: 'Ally Polishchuk',
        role: 'Strategy',
        avatar: '/team/ally.png',
        linkedin: 'https://www.linkedin.com/in/ally-polishchuk-972408147/'
    },
    {
        name: 'Rico Soriano',
        role: 'Marketing',
        avatar: '/team/rico.png',
        linkedin: 'https://www.linkedin.com/in/rico-john-soriano-383420266/'
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
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-sm">{member.name}</span>
                                    <a 
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary block"
                                    >
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

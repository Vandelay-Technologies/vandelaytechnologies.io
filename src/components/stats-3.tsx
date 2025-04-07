const CornerDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Vandelay in Numbers</h2>
                    <p>We help Web3 founders go from idea to launch—combining smart contract engineering, brand building, and full-stack go-to-market execution.</p>
                </div>

                <div className="grid *:text-center md:grid-cols-3 relative border">
                    <CornerDecorator />
                    <div className="space-y-4 border py-12">
                        <div className="text-5xl font-bold">+40</div>
                        <p>Projects Launched</p>
                    </div>
                    <div className="space-y-4 border py-12">
                        <div className="text-5xl font-bold">+60</div>
                        <p>Smart Contracts Deployed</p>
                    </div>
                    <div className="space-y-4 border py-12">
                        <div className="text-5xl font-bold">7 Days</div>
                        <p>Avg Go-to-Market Time</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

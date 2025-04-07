import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

const CornerDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

export default function Features() {
    return (
        <section id="features" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Designed to Scale With You</h2>
                    <p className="mt-4">We help high-potential Web3 projects move from chaos to clarity and sustainable growth.</p>
                </div>
                <Card className="@min-4xl:max-w-full mx-auto mt-8 !p-0 !gap-0 overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16 relative">
                    <CornerDecorator />
                    <div className="grid @min-4xl:grid-cols-3 divide-y @min-4xl:divide-y-0 @min-4xl:divide-x h-full">
                        <div className="group">
                            <div className="p-6">
                                <CardHeader className="pb-3">
                                    <CardDecorator>
                                        <Zap className="size-6" aria-hidden />
                                    </CardDecorator>

                                    <h3 className="mt-6 font-medium">Smart Contract Ready</h3>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm">Custom-built, secure contracts for DeFi, tokens, staking, and beyond.</p>
                                </CardContent>
                            </div>
                        </div>

                        <div className="group">
                            <div className="p-6">
                                <CardHeader className="pb-3">
                                    <CardDecorator>
                                        <Settings2 className="size-6" aria-hidden />
                                    </CardDecorator>

                                    <h3 className="mt-6 font-medium">Total Ops Overhaul</h3>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm">Streamlined tooling and processes for agile, scalable team operations.</p>
                                </CardContent>
                            </div>
                        </div>

                        <div className="group">
                            <div className="p-6">
                                <CardHeader className="pb-3">
                                    <CardDecorator>
                                        <Sparkles className="size-6" aria-hidden />
                                    </CardDecorator>

                                    <h3 className="mt-6 font-medium">Community-Centric Growth</h3>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm">Engagement strategies and campaigns tailored for your audiences.</p>
                                </CardContent>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)

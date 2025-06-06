'use client'
import { Logo } from '@/components/logo'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

export default function FeaturesSection() {
    return (
        <section id="services" className="px-4 py-16 md:py-32">
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2 relative">
                <CardDecorator />
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MapIcon className="size-4" />
                            Real-Time Project Visibility
                        </span>

                        <p className="mt-8 text-2xl font-semibold">Live monitoring your project&apos;s marketing impact.</p>
                    </div>

                    <div aria-hidden className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-(--radius) bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                <span className="text-lg">X</span> New Follower from Paris
                            </div>
                            <div className="rounded-(--radius) bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5 dark:bg-zinc-900"></div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MessageCircle className="size-4" />
                            Always-On Web3 Support
                        </span>

                        <p className="my-8 text-2xl font-semibold">Reach out via email or web for any assistance you need.</p>
                    </div>
                    <div aria-hidden className="flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex size-5 rounded-full border">
                                    <Logo className="m-auto size-3" />
                                </span>
                                <span className="text-muted-foreground text-xs">Sat 22 Feb</span>
                            </div>
                            <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">Hey, I&apos;m having trouble managing the community telegram group. Can you help me find a few moderators?</div>
                        </div>

                        <div>
                            <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">I&apos;ve got moderators ready to go. How many you need?</div>
                            <span className="text-muted-foreground block text-right text-xs">Now</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl">Secure Audited Smart Contracts</p>
                </div>
                <div className="col-span-full">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            Live Growth Analytics
                        </span>

                        <p className="my-8 text-2xl font-semibold">
                        Track campaign reach and token activity across platforms. <span className="text-muted-foreground"> Instantly identify and resolve issues.</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} className="bg-background">
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
}

const chartConfig = {
    buys: {
        label: 'Token Buys',
        color: '#2563eb',
    },
    social: {
        label: 'Socials',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', buys: 36, social: 124 },
    { month: 'June', buys: 56, social: 164 },
    { month: 'January', buys: 126, social: 252 },
    { month: 'February', buys: 205, social: 410 },
    { month: 'March', buys: 200, social: 330 },
    { month: 'April', buys: 400, social: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient id="fillbuys" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-buys)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-buys)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillsocial" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-social)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-social)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" labelKey="month" />} />
                <Area strokeWidth={2} dataKey="social" type="monotone" fill="url(#fillsocial)" fillOpacity={0.1} stroke="var(--color-social)" stackId="a" />
                <Area strokeWidth={2} dataKey="buys" type="monotone" fill="url(#fillbuys)" fillOpacity={0.1} stroke="var(--color-buys)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}

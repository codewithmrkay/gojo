import dynamic from 'next/dynamic'

const GithubActivityClient = dynamic(
    () => import('./GithubActivityClient'),
    { ssr: false }
)

export default function GithubActivityPage() {
    return (
        <div className="mt-3 bg-black font-light calendar-wrapper border-4 rounded-lg border-[#3f4178] w-full max-w-md md:max-w-fit mx-auto">
            <GithubActivityClient />
        </div>
    )
}

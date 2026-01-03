'use client'

import { ActivityCalendar } from 'react-activity-calendar'

function generateFakeData(days = 365) {
    const today = new Date()
    const data = []

    for (let i = days; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(today.getDate() - i)

        const chance = Math.random()
        let count = 0

        if (chance > 0.85) count = rand(4, 6)
        else if (chance > 0.65) count = rand(2, 3)
        else if (chance > 0.45) count = 1

        data.push({
            date: date.toISOString().slice(0, 10),
            count,
            level: count === 0 ? 0 : Math.min(Math.ceil(count / 2), 4),
        })
    }

    return data
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const githubGreenTheme = {
    dark: [
        '#161b22',
        '#0e4429',
        '#006d32',
        '#26a641',
        '#39d353',
    ],
}
export default function GithubActivityClient() {
    const data = generateFakeData()
    return <ActivityCalendar colorScheme='dark' theme={githubGreenTheme} showMonthLabels={false} showTotalCount={false} data={data} />
}

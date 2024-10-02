"use client"

import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const graduationDate = new Date('2024-10-26T15:30:00')

    const timer = setInterval(() => {
      const now = new Date()
      const difference = graduationDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="p-2 flex flex-col items-center justify-center">
              <div className="text-5xl font-medium font-eb-garamond text-gray-700 mb-2">{value}</div>
              <div className="text-sm text-gray-600 capitalize">{unit}</div>
            </div>
          ))}
        </div>
    </div>
  )
}
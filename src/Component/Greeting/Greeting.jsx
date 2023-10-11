import React from 'react'

export default function Greeting() { 

     const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1 className='pt-[90px] text-[#fff] font-bold text-4xl'>Good {timeOfDay}</h1>
        )
}

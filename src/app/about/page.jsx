"use client"
import React,{ use, useState } from 'react'

const About = () => {
const [age, setAge] = useState(100)
  return (
    <div>Yo, I'm livin to {age}!!</div>
  )
}

export default About
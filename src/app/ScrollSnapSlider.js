'use client'
import React, { useState } from 'react'




const ScrollSnapSlider = () => {

    const [movement, setMovement] = useState(0)

    const [cat1, setCat1] = useState([
        {name:'Host Gator',displayText:'Up to 89% back',imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNd1IzEeg_7s2vGIh-7n4nymHcGmxn0xXkQ&s',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis corporis.'},
        {name:'MalBytes',displayText:'Up to 19% back',imgUrl:'https://cdn.cookielaw.org/logos/4e1c8bc8-2743-413b-8699-aad2216e8616/3be7f101-47f0-48ab-ae22-e34efabb8a62/9b43fe5c-b22b-40eb-9d38-57e36d038e98/MWB_logo_horizontal_RGB.png',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis corporids.'},
        {name:'Host Gator',displayText:'Up to 89% back',imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNd1IzEeg_7s2vGIh-7n4nymHcGmxn0xXkQ&s',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis corporis.'},
        {name:'MalBytes',displayText:'Up to 19% back',imgUrl:'https://cdn.cookielaw.org/logos/4e1c8bc8-2743-413b-8699-aad2216e8616/3be7f101-47f0-48ab-ae22-e34efabb8a62/9b43fe5c-b22b-40eb-9d38-57e36d038e98/MWB_logo_horizontal_RGB.png',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis corporids.'},
        {name:'Host Gator',displayText:'Up to 89% back',imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNd1IzEeg_7s2vGIh-7n4nymHcGmxn0xXkQ&s',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis corporis.'},
        {name:'MalBytes',displayText:'Up to 19% back',imgUrl:'https://cdn.cookielaw.org/logos/4e1c8bc8-2743-413b-8699-aad2216e8616/3be7f101-47f0-48ab-ae22-e34efabb8a62/9b43fe5c-b22b-40eb-9d38-57e36d038e98/MWB_logo_horizontal_RGB.png',content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error debitis corporids.'},
    ])

const nudgeRight = () => {
    console.log('awoooga')
    setMovement(movement + 200 )
}
const nudgeLeft = () => {
    console.log('awoooga')
    setMovement(movement - 260)
}

  return (
    <div className="app">
    <h1 className='text-black font-bold ml-16'>Website Creation </h1>
    <div className='flex space-between gap-3'>
    <button onClick={nudgeLeft} style={{color:"red",border:'1px solid red',padding:'1em'}}>&larr; left</button>
    <button onClick={nudgeRight} style={{color:"red",border:'1px solid red',padding:'1em'}}>right &rarr;</button>
    </div>
    <ul className="hs full">
     
       {cat1.map((c,index)=>( 
        <article key={`item-${index}`} className="item p-1 rounded-xl bg-white ring-3 ring-indigo-50 sm:p-1 lg:p-4 gapx-3" style={{minHeight:'200px', maxHeight:'50vh',width:'auto',minWidth:'200px',maxWidth:'270px',minHeight:'22em',margin:'auto',border:'2px solid rgba(0,0,0,0.12)',scrollRight: `${movement}`}}>
<img src={c.imgUrl} alt="" style={{padding:'1em 0 3em 0',maxWidth:'200px'}} />
<h4 className='text-md font-bold text-black'>{c.title}</h4>
<h2>{c.displayText}</h2>
<p className='text-xs pb-6 pt-3'>{c.content}</p>
<button className="btn bg-blue-500 px-12 py-1 text-white font-bold" style={{borderRadius:'0.25em',outline:'none'}}>Shop&nbsp;Now </button>
        </article>))}

    
    </ul>
    
    <ul className="hs full no-scrollbar">
      <li className="item">test</li>
      <li className="item">test</li>
      <li className="item">test</li>
      <li className="item">test</li>
    </ul>
    
    <div className="container">
      <div className="item">
        <h3>Block for context</h3>
      </div>
    </div>
  </div>
        
  )
}

export default ScrollSnapSlider
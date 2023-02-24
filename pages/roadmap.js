import React from 'react'
import Image from 'next/image'

function roadmap() {
  return (
    <div className="container">
    {/* <!-- Video Lightbox --> */}
    <figure className="before:bg-jacarta-900/25 rounded-xl relative mt-16 overflow-hidden rounded-3xl before:absolute before:inset-0 ">
      <img
        src="/roadmapPage.png"
        className="w-full"
        alt="video"
      />
    </figure>
  </div>
  )
}

export default roadmap
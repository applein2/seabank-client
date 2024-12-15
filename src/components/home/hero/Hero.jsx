import React from "react"
import HeadingMultiline from "../../common/HeadingMultiLine"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <HeadingMultiline titleFirst='Smart' titleSecond='조난알리미' subtitle='Smart Distress Alert Device' />
        </div>
      </section>
    </>
  )
}

export default Hero

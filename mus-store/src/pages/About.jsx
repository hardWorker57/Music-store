import React from 'react'

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pt-14 pb-5 text-2xl text-center">About us</h2>
      <hr />
      <br />
      <div className="flex flex-col gap-y-10">
        <p className="text-center mx-auto max-w-md">Our team makes wonderful websites with cool interfaces and magnificent functionality</p>
        <div className="flex justify-between">
          {/* <div className="flex flex-col items-center w-full">+996 556 202 806 </div>
          <div className="flex flex-col items-center w-full">pobedovataj@gmail.com</div> */}
        </div>
        {/* <div className="flex justify-center"><button className="">Send</button></div> */}
      </div>
    </div>
  )
}

export default About
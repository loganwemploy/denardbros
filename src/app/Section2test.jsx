import React from 'react'

const Section2test = () => {
  return (
    <div>
      <section className='bg-transparent relative'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-8 ">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded p-8 z-[1]"
              alt=""
            />
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <p className="mt-4 text-gray-700">
                Lorem Ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.
              </p>
            </div>
          </div>
        </div>
        <div className="gray-box bg-gray-400 absolute top-0 w-full h-[33%]" style={{zIndex:'-1'}}>im gray box </div>
      </section>
    </div>
  )
}
export default Section2test
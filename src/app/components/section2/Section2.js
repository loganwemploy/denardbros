import React from 'react'

const Section2 = () => {
  const section1Title = "Registration is Open"
  const upperCaser = (word)=>{
    return word.toUpperCase()
  }
  return (
    <div>
      <section>
        <div className="px-2 py-4 sm:px-6">
          <div className="mt-[-160px] space-y-4 md:space-y-8">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="sm:p-2 mx-auto md:w-[880px] md:h-[480px] object-contain rounded"
              alt=""
            />
            <div className='flex flex-col-reverse md:flex-row md:justify-between p-4'>
              <div className=''>
                <h2 className='mb-8'>{upperCaser("Registration is Open")}</h2>
                <button class="flex items-center ml-0 mr-0 px-[30px] py-[20px] no-underline cursor-pointer bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:bg-gray-900">
                Camp Dates &amp; Rates &rarr;
                </button>

              </div>
              <div className=''>
                <h2 className='mb-4'>Ages 8-12</h2>
                <p className='text-wrap'>Denard Bro's is an Elite Basketball Camp for Aspiring Hoopers!</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Section2
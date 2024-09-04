import React from 'react'

const Login2 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">PIXLS</div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-600">Home</a>
            <a href="#" className="text-black font-bold">Get started</a>
            <a href="#" className="text-gray-600">About</a>
            <a href="#" className="text-gray-600">Forum</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Try 'Lotus GT 430'" className="bg-gray-200 rounded-full px-4 py-2 pl-10 focus:outline-none" />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
            <button className="bg-lime-400 text-white px-4 py-2 rounded-full">Login</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-10 px-4">
        <div className="flex-1 text-center md:text-left">
          
          <h1 className="text-5xl font-bold mt-2">
            POWERED BY <span className="relative inline-block">
              <span className="absolute inset-0 bg-lime-400 h-6 bottom-0.5 rounded-full"></span>
              <span className="relative">CREATORS AROUND</span>
            </span> THE WORLD.
          </h1>
          <div className="flex space-x-2 mt-4 justify-center md:justify-start">
            <div className="w-10 h-10 bg-lime-400 rounded-full"></div>
            <div className="w-10 h-10 bg-lime-500 rounded-full"></div>
            <div className="w-10 h-10 bg-lime-600 rounded-full"></div>
            <div className="w-10 h-10 bg-lime-700 rounded-full"></div>
          </div>
         <div className='flex justify-center items-center mt-10 space-x-5'>
         <p className=" text-gray-600">Don't have account?</p>
         <a href="#" className="inline-block text-black font-bold">Create account <i className="fas fa-arrow-right"></i></a>
         </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
            <h3 className="text-center text-lg font-bold">Login to your account</h3>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"  />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"  />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-lime-400" defaultChecked />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-gray-600">Forgot your password?</a>
              </div>
              <button className="w-full bg-black text-white py-2 rounded-lg">Login</button>
            </form>
          </div>
        </div>
      </main>
      <section className="container mx-auto mt-10 px-4 mb-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
          <img src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" className="rounded-lg" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold">About us</h3>
            <p className="mt-2">Over <span className="font-bold">3 million</span> free <span className="font-bold">high-resolution</span> images brought to you by the world's most generous community of photographers.</p>
          </div>
        </div>  
            
         
          <div className="flex-1 relative">
            <img src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm">01/05</p>
            </div>
             
          </div>
          <div className="flex-1 relative">
            <img src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" className="rounded-lg" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm">01/05</p>
            </div>
           
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Login2
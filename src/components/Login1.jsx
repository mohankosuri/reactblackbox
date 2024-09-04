import React from 'react'

const Login1 = () => {
  return (
    <div className="flex h-screen">
    <div className="w-1/2 bg-amber-50 flex flex-col justify-center items-center p-10">
      <div className="mb-8">
        <img src="https://placehold.co/50x50" alt="Logo" className="mb-4" />
        <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-600">
          The faster you fill up, the faster you get a ticket
        </p>
      </div>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a
            className="inline-block align-baseline font-bold text-sm text-gray-700 hover:text-gray-800"
            href="#"
          >
            Forgot Password
          </a>
        </div>
        <div className="mb-4">
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded w-full"
            type="button"
          >
            Sign In
          </button>
        </div>
        <div className="mb-4">
          <button
            className="bg-white text-black border border-gray-300 font-bold py-2 px-4 rounded w-full flex items-center justify-center"
            type="button"
          >
            <i className="fab fa-google mr-2"></i> Sign In with Google
          </button>
        </div>
      </form>
      <p className="text-gray-600 mt-4">
        Don’t have an account?{' '}
        <a href="#" className="text-black font-bold">
          Sign up
        </a>
      </p>
    </div>
    <div className="w-1/2 relative">
      <img
        src="https://images.unsplash.com/photo-1522199899308-2eef382e2158?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Karina from Aespa"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-10 left-10 text-white">
        <h2 className="text-4xl font-bold">Karina 카리나</h2>
        <p className="mt-2">
          aespa (에스파) 는 대한민국의 SM 엔터테인먼트 소속 4인조 다국적 걸그룹이다. SMCU
          프로젝트의 첫 주자로 나서게 되며
        </p>
      </div>
    </div>
  </div>

  )
}

export default Login1
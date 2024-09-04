import React from 'react';

const Sighup = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 rounded-lg shadow-lg flex overflow-hidden max-w-4xl w-full">
        <div className="w-1/2 relative">
          <img
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-j5wHVefcUIYem9HLMDIuwXLg.png?st=2024-09-04T10%3A35%3A47Z&amp;se=2024-09-04T12%3A35%3A47Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-03T23%3A50%3A59Z&amp;ske=2024-09-04T23%3A50%3A59Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=zEUxI9wwu8%2BTUbDi4j%2BCoq4fo4Df1RZm9upGywGE2OM%3D"
            alt="A beautiful desert landscape with a purple sky"
            className="w-full h-full object-cover"
            width="600"
            height="800"
          />
          
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <p className="text-lg font-semibold">Capturing Moments, Creating Memories</p>
            <div className="flex space-x-2 mt-2">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold text-white mb-4">Create an account</h2>
          <p className="text-gray-400 mb-6">
            Already have an account?{' '}
            <a href="#" className="text-blue-400">
              Log in
            </a>
          </p>
          <form>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              />
              <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-400">
                I agree to the{' '}
                <a href="#" className="text-blue-400">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold">
              Create account
            </button>
          </form>
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-600" />
            <span className="text-gray-400 mx-4">Or register with</span>
            <hr className="flex-grow border-gray-600" />
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center justify-center w-1/2 bg-gray-700 text-white py-3 rounded-lg">
              <i className="fab fa-google mr-2"></i> Google
            </button>
            <button className="flex items-center justify-center w-1/2 bg-gray-700 text-white py-3 rounded-lg">
              <i className="fab fa-apple mr-2"></i> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sighup;

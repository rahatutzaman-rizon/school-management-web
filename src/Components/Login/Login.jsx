

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="PIN / Student ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-300"
          >
            SIGN IN
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          or sign in with
        </div>
        <button className="w-full mt-3 flex items-center justify-center border border-gray-300 rounded-full py-2 hover:bg-gray-50 transition duration-300">
          <img src="" alt="Google" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
        <div className="mt-4 text-center text-sm">
          <a href="#" className="text-amber-500 hover:underline">Forgot your password? CLICK HERE</a>
        </div>
        <div className="mt-2 text-center text-sm">
          If you dont have account <a href="#" className="text-amber-500 hover:underline">Register Here</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
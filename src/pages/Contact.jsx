

export default function Contact() {
  return (
    <>
      {/* <Navbar /> */}
      <section className="h-[86vh] bg-[rgb(15,23,42)] text-white flex items-center justify-center px-6">
        <div className="max-w-lg w-full bg-slate-800 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

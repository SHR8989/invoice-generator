import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function About() {
  return (
    <>
      {/* <Navbar /> */}
      <section className="h-[86vh] bg-[rgb(15,23,42)] text-white flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to Invoice Generator App! 🚀 <br />
            Get your invoice generated instantly and you can also download it as PDF. <br />
            I built this project to simplify invoice management with a clean,
            modern UI and smooth experience. It's build using React, Redux Toolkit and some other libraries.
            <br /><br />
            I’m passionate about coding and creating practical tools that solve
            real-world problems. This app is just one of my many steps toward
            becoming a professional full-stack developer.
          </p>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

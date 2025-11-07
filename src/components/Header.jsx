
import bannerImage from "../assets/banner-image.jpg"; // Ensure you have the image in the specified path

const Header = () => {
  return (
          <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-6 md:px-12 mt-10"
      style={{
        backgroundImage: `url(${bannerImage})`}}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-left text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
          Achieve Financial Independence and Time Freedom - with us!
        </h1>
        <button className="mt-8 bg-[#af8a4a] hover:bg-[#af8a4a] text-white font-semibold py-3 px-8 rounded-lg transition-all">
          Get Started
        </button>
      </div>
    </section> 
  )
}
export default Header

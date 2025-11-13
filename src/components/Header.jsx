
import bannerImage from "../assets/banner-image.jpg"; // Ensure you have the image in the specified path

const Header = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-6 md:px-12 "
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-[var(--brand-dark)]/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-left text-[var(--brand-light)]">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
          We help you to manage your portfolio and invest wisely.
        </h1>
                <p className="mt-6 text-lg italic text-[var(--brand-gray-light)] leading-relaxed border-l-4 border-[var(--brand-gold)] pl-4">
          “Do not save what is left after spending, but spend what is left after saving.”<br />
          <span className="block mt-2 text-sm not-italic text-[var(--brand-gold)]">
            — Warren Buffett
          </span>
        </p>
        <button className="mt-8 bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] text-[var(--brand-light)] font-semibold py-3 px-8 rounded-lg transition-all">
          Get Started
        </button>
      </div>
    </section>
  )
}
export default Header

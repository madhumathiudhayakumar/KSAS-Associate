

const Aboutme = () => {
    return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          ABOUT ME
        </h2>

        {/* Underline */}
        <div className="w-14 h-1 bg-[#af8a4a] mx-auto mt-2 mb-6 rounded-full"></div>
        <div className="px-4 md:px-8 pb-8">
  <div className="mx-auto text-left space-y-4">
    
    <p className="text-md text-black leading-relaxed text-left">
With over 15 years of experience in the field of money management, I specialize in helping individuals 
and families achieve financial stability and growth. My expertise covers a wide range of investment and 
protection solutions, including intraday trading, term insurance,
 health insurance, mutual funds, bonds, fixed deposits, gold investments, and real estate planning.
    </p>

    <p className="text-md text-black leading-relaxed text-left">
I believe in a balanced approach to wealth creation—focusing on both risk management and 
long-term growth. My goal is to provide clear, practical, and personalized financial strategies that help
 clients make informed decisions and build a secure financial future.
    </p>
    </div>
  </div>

      </div>
    </section>
    )
};
export default Aboutme;
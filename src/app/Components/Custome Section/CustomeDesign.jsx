import Link from "next/link";

export default function CustomDesignSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Heading, Content, and Button */}
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold mb-6">Design Your Own T-shirt</h2>
            <p className="text-gray-600 mb-6">
              Create a unique t-shirt that reflects your style. Choose from our
              templates, add custom text, and pick your favorite colors. Perfect
              for freelancers who want to stand out!
            </p>
            <Link
              href="/custom-design"
              className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Start Designing
            </Link>
          </div>

          {/* Right Side: Video */}
          <div className="md:w-1/2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/custom-design-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import BuyButton from "../Components/Buttons/BuyButton";

export const metadata = {
  title: "Coded Cotton - Premium T-Shirts for Freelancers",
  description:
    "Discover high-quality, stylish t-shirts designed for freelancers and developers. Stand out with unique, comfortable apparel.",
  keywords:
    "freelancer t-shirts, premium cotton shirts, stylish apparel, developer fashion",
};

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 my-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Crafted for Creators:
            <span className="text-[#6B8375]"> Coded Cotton</span>
          </h1>
          <p className="mt-4 mb-8 text-lg text-gray-600">
            Elevate your style with premium quality, uniquely designed t-shirts
            that express your creativity and professionalism. We are dedicated
            to delivering high-quality solutions that drive real business
            success. Our team of professionals is committed to providing
            innovative and effective digital solutions tailored to your needs.
          </p>

          <BuyButton text="Shop Now" />
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full object-cover rounded-md"
            src="/images/cover.webp"
            alt="Coded Cotton T-Shirt"
            width={800}
            height={600}
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="text-center py-12">
        <h2 className="text-5xl font-bold text-center mb-6">Our Mission</h2>
        <p className="text-lg">
          Our mission is to empower businesses by providing them with
          cutting-edge digital solutions. We strive to enhance productivity,
          efficiency, and scalability through our services. We believe in
          building long-term partnerships based on trust and mutual growth.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Choosing the right apparel brand matters. Here's why our customers
          love Coded Cotton:
        </p>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Premium Quality */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-3">Premium Quality</h3>
              </div>
              <p className="text-gray-600">
                Premium quality fabrics that provide comfort all day long.
              </p>
            </div>

            {/* Card 2: Unique Designs */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-3">Unique Designs</h3>
              </div>
              <p className="text-gray-600">
                Unique designs tailored for freelancers, entrepreneurs, and
                everyday casual wear.
              </p>
            </div>

            {/* Card 3: Eco-Friendly */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-3">Eco-Friendly</h3>
              </div>
              <p className="text-gray-600">
                Eco-friendly and sustainable materials to support a greener
                planet.
              </p>
            </div>

            {/* Card 4: Affordable Pricing */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 0v1m0-1H9m3 0h3m-3 0H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-3">
                  Affordable Pricing
                </h3>
              </div>
              <p className="text-gray-600">
                Affordable pricing without compromising on quality.
              </p>
            </div>

            {/* Card 5: Fast Shipping */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold ml-3">Fast Shipping</h3>
              </div>
              <p className="text-gray-600">
                Fast and reliable shipping so you get your favorite t-shirts on
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              title: "Premium Quality",
              desc: "Only the finest materials for long-lasting comfort and durability.",
            },
            {
              title: "Unique Designs",
              desc: "Stand out with designs that reflect creativity and passion.",
            },
            {
              title: "Freelancer Focus",
              desc: "Tailored for freelancers who value style and professionalism.",
            },
            {
              title: "Exceptional Service",
              desc: "We prioritize customer satisfaction with top-tier service.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#6B8375] text-white py-12 text-center rounded-md">
        <h2 className="text-3xl font-bold">Ready to Elevate Your Brand?</h2>
        <p className="text-lg mt-4">
          Explore our collection of premium t-shirts designed for freelancers.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-white text-[#6B8375] px-6 py-3 rounded-md font-medium text-lg uppercase"
        >
          View Collection
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;

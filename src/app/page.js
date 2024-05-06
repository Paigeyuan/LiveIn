"use client"
// Importing React and other necessary components from their packages
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/outline';
import './globals.css';
import './ScrollAnimation.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image'


export default function Page() {
  // State for the Navbar component
  const [showScroll, setShowScroll] = useState(true); // State to control the visibility of the scroll animation
  const [email, setEmail] = useState('');
  const [error, setError] = useState([])
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeCard, setActiveCard] = useState(null);



  const handleCardClick = (id) => {
    // Toggle active state to null if the same card is clicked again, otherwise set to new id
    setActiveCard(activeCard === id ? null : id);
  };


  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);


    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json(); // รับค่า JSON จากการตอบกลับของ API
      if (res.ok) {
        console.log('Email sent successfully to:', email);
        setSuccess(data.success);
        setMessage(data.msg.join(", "));
        setEmail(""); // ล้างช่องอีเมลหลังจากส่งสำเร็จ
      } else {
        console.error('Subscription failed:', data.msg);
        setError(data.msg.join(", "));
      }
    } catch (error) {
      console.error('Error during subscription process:', error);
      setError('Error during subscription process. Please try again.');
    }
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset <= 500) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset > 500) {
        setShowScroll(false);
      }
    };



    window.addEventListener('scroll', checkScrollTop);


    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);




  const services = [
    {
      icon: "/eye.svg",
      title: "AI-Powered Transparency",
      description: "AI algorithms analyze market data and bidding patterns to ensure open and fair bidding practices."
    },
    {
      icon: "/champion.png",
      title: "Scoring for Tenant Screening:",
      description: "Our AI-driven scoring system evaluates tenants based on KYC compliance, payment history, and reviews."
    },
    {
      icon: "/graph.png",
      title: "Real-Time Bidding Insights",
      description: "AI provides users with real-time data and insights during auctions, enabling informed and strategic bidding."
    },
    {
      icon: "/tag.png",
      title: "AI-Suggested Bidding Prices",
      description: "AI algorithms recommend optimal bid prices by analyzing extensive market data and trends."
    }
  ];


  const useCases = [
    {
      id: 1,
      imgSrc: "/discover.png",
      title: "Discover & Analyze",
      description: "Browse properties and leverage AI insights for market analysis and value estimation."
    },
    {
      id: 2,
      imgSrc: "/brain.png",
      title: "Bid with Intelligence",
      description: "Place bids using AI recommendations for optimal pricing and real-time auction updates."
    },
    {
      id: 3,
      imgSrc: "/shakehand.png", // Placeholder for your third use case image
      title: "Secure & Finalize",
      description: "Win the auction with AI's guidance and smoothly complete your property acquisition process."
    }
  ];

  const reviews = [
    {
      id: 1,
      rating: 5,
      userImage: '/Liang Chen.png',
      userName: 'Liang Chen',
      userRole: 'Real Estate Investor',
      comment: "Effortless bidding and clear insights with AI Live-in. Truly transformed my property buying journey!",
      emoji: '🏠',
    },
    {
      id: 2,
      rating: 5,
      userImage: '/max.png',
      userName: 'Maximilian Bauer',
      userRole: 'Property Manager',
      comment: "AI Live-in's scoring system: Quick, clear, and makes renting decisions a breeze!",
      emoji: '💼',
    }
  ];






  return (
    <>

      <div style={{
        position: 'relative',
        width: '100%',
      }}>
        <LazyLoadImage
          src="/cover.png"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1  // Ensure the image is in the background
          }}
        />



        <div className="py-20 font-sans px-4 sm:px-8 lg:px-8 lg:py-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


              {/* Hero Content Left */}
              <div className="py-20 space-y-6">
                <h1 className="text-5xl text-dark-blue font-medium">Evolving<br /> Real Estate Bidding <br /> with AI</h1>
                <h1 className="pt-2 pb-6 text-lg text-gray-700">
                  AI enhances transparency in real estate bidding <br />
                  ensuring a fair and open process for all participants.
                </h1>
                <div className="flex flex-col md:flex-row flex-wrap overflow-hidden md:space-x-4 space-y-4 md:space-y-0 text-center">
                  <a href="/Compare-plans" className="bg-orange hover:bg-orange-hover text-white font-medium py-4 px-2 md:px-4 rounded-lg shadow m-1 md:m-0">Complare Plans</a>
                  <a href="/Buy-token"
                    className="bg-violet hover:bg-violet-hover text-white font-medium py-4 px-2 md:px-4 rounded-lg shadow m-1 md:m-0 transition duration-300 ease-in-out">
                    Get Token
                  </a>
                </div>
              </div>


            </div>
          </div>


          {/* Conditional rendering based on the showScroll state */}



          <div>
            {showScroll && (
              <div className="container2">
                <div className="mouse"></div>
              </div>
            )}
          </div>


        </div>



        {/* Transforming the Way You Buy and Rent*/}
        <section className="font-sans py-20 bg-gray-50">

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <div className="text-gray-600 uppercase mb-4">AI-Powered Solutions</div>
                <h2 className="font-semibold text-3xl lg:text-4xl text-gray-800">
                  Transforming the Way You Buy and Rent
                </h2>
                <p className="text-gray-600">
                  Discover the potential of AI to streamline your real estate transactions for a smoother, more transparent process.
                </p>
              </div>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="py-4 flex items-start">
                    <img src={service.icon} alt="" className="w-9 h-9 flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="marker:text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </section>


        {/* Streamlined Bidding with AI Assistance */}


        <section className="font-sans py-20 bg-gray-50">


          <div className="pb-10">
            <h2 className="pb-10 text-center text-4xl font-semibold text-dark-blue">
              Streamlined Bidding with AI Assistance
            </h2>
            <div className="container mx-auto px-4 lg:px-8">






              <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                {useCases.map(({ id, imgSrc, title, description }) => (
                  <div
                    key={id}
                    onClick={() => handleCardClick(id)}
                    className={`shadow-xl tile-for-your-business-use-case w-container group bg-white ${activeCard !== id ? 'hover:bg-purple-200 hover:-translate-y-2 hover:shadow-xl' : ''} p-4 rounded-lg transition-all duration-300 ease-in-out transform cursor-pointer`}
                  >
                    <div className="items-center for-your-business-image flex justify-center">
                      <img
                        src={imgSrc}
                        loading="lazy"
                        alt={title}
                        className="image-for-business-use-case w-20 h-20 md:w-24 md:h-24" // Adjust the size as needed
                      />
                    </div>
                    <div className="tile-datasource-content-wrapper text-center mt-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                      <p className="mt-2 text-base text-gray-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Introducing Our Tenant Scoring System */}


        <section className="font-sans py-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-semibold text-3xl lg:text-4xl text-gray-800">
                  Introducing Our Tenant Scoring System
                </h2>
                <p className="text-gray-600">
                  The Tenant Scoring Feature on AI Live-in modernizes tenant evaluation by combining payment history, reviews, and user activity with selective AI insights, creating a dynamic, community-driven scoring system.
                </p>
              </div>


              {/* Image Content */}
              <div className="flex justify-center lg:justify-end hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src="/emma.png" // Ensure the path to your image is correct
                  alt="Tenant Scoring System"
                  className="max-w-full h-auto rounded-lg shadow-lg hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="font-sans py-40 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="font-semibold text-3xl lg:text-4xl text-gray-800">
                  Customer Reviews
                </h2>
              </div>


              {/* Customer Review Cards */}
              <div className="flex flex-col gap-8">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-lg shadow p-4 flex">
                    <img src={review.userImage} alt={review.userName} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                        <span className="ml-2">{review.emoji}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <div className="mt-4">
                        <h5 className="font-bold text-gray-600">{review.userName}</h5>
                        <p className="text-sm text-gray-500">{review.userRole}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Discover the power of AI*/}
        <section className="font-sans py-2">
          <div className="container mx-auto  px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Heading */}
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 pr-0 md:pr-10 lg:pr-14">
                Discover the power of AI
              </h2>
              {/* Description and Button */}
              <div>
                <p className="text-lg text-gray-600 mt-4 md:mt-0">
                  Unlock potential of AI Live-In and revolutionize your business
                </p>
                <a href="/new-page" className="mt-6 inline-flex items-center justify-center px-5 py-3  transition-all text-base font-medium rounded-md text-white bg-violet hover:bg-violet-hover">
                  Try LiveIn
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>




        {/* Stay up to data */}
        <section className="font-sans py-20 bg-gray-50 border-t border-primary mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="py-8">
              {/* Main Content and CTA Buttons */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                <div>
                  {/* Logo and Heading */}

                  <div className="py-4 flex items-center ">
                    {/* Logo and Heading */}
                    <img src="/logo single.png" className="h-12 w-auto mr-2" />
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 pt-4">Live-In</h2>
                  </div>
                  <p className="text-gray-700 mb-6">Stay up to date on the latest features and releases by joining our newsletter.</p>

                </div>
                {/* Add additional content or image here if necessary */}
              </div>


              {/* Newsletter Subscription Form */}

              <div>
                <form onSubmit={handleSubmit} className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="p-2 text-gray-700 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button type="submit" className="bg-orange hover:bg-orange-hover text-white font-semibold py-2 px-4 rounded" disabled={loading}>
                    {loading ? 'Loading...' : 'Subscribe'}
                  </button>

                </form>
              </div>
              <div className="flex flex-col">
                {error && <div className={`text-red-600 px-5 py-2`}>{error}</div>}
                {success && <div className={`text-green-800 px-5 py-2`}>{message}</div>}
                {loading && <div>Loading...</div>} Optional: Replace with a CSS spinner
              </div>

            </div>




            {/* Footer Bottom Section */}
            <div className="mt-12">
              {/* Right Column: Contact Information */}
              <div>
                <h2 className="text-xl text-dark-blue font-semibold mb-4">Contact Information</h2>
                <p className="list-disc text-gray-500 space-y-2">
                  <span className="break-words">leaperwayinnovation@Leaperway.onmicrosoft.com</span>
                </p>
              </div>

              <div>
                <h2 className="pt-10 text-xl text-dark-blue font-semibold mb-4">Quick Links</h2>
                <ul className="list-disc text-dark-blue space-y-2">
                  <a href="/about-us" className="text-gray-500 hover:text-violet transition duration-300">About Us</a>
                </ul>

                <ul className="pt-2 list-disc text-dark-blue space-y-2">
                  <a href="/FAQ" className="text-gray-500 hover:text-violet transition duration-300">FAQ</a>
                </ul>
              </div>
              {/* Legal links and other info */}
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

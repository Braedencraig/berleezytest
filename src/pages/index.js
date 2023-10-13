/* eslint-disable @next/next/no-page-custom-font */
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Image from "next/image";
import Head from "next/head"; // to add Google fonts

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  function closeModal() {
    setModalOpen(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!checked) {
      alert(
        "Please consent to the collection of your email for important updates about The Ball"
      );
      return;
    }

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, userQuestion: userQuestion || "" }),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  }

  return (
    <div
      style={{ backgroundImage: "url('/bg.png')" }}
      className="min-h-screen bg-cover bg-center flex flex-col pt-12 md:pt-0 items-center justify-start bg-black text-white pb-12"
    >
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="relative rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 text-white bg-black py-2 px-4 rounded-full"
            >
              &times;
            </button>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cGG9m99Jayc?si=yi4yBU8m5WVEVmEM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Roboto', sans-serif;
            }
          `}
        </style>
      </Head>
      <Helmet>
        <title>Berleezy: The Ball</title>
        <meta
          name="description"
          content="Sign up to receive important updates about The Ball"
        />
        <meta name="keywords" content="Berleezy, The Ball" />
        <meta name="author" content="Berleezy" />
      </Helmet>

      <div className="relative w-3/4 md:w-1/3 mt-6 md:mt-12 md:max-w-[500px]">
        <Image
          src="/logo.png"
          alt="Berleezy: The Ball"
          layout="responsive"
          width={540}
          height={540}
          objectFit="contain"
        />
      </div>

      <div className="relative w-3/4 md:w-1/3 mt-6 md:mt-12 md:max-w-[500px]">
        <Image
          src="/hero.png"
          alt="Berleezy: The Ball"
          layout="responsive"
          width={540}
          height={540}
          objectFit="contain"
        />
      </div>
      <div className="border-image-container">
        <div className="mt-8 text-center mt-[115px]">
          <div className="text-md md:text-lg font-semibold">
            December 15th (Secret Location) <br />
            December 16th (The Majestic Downtown)
          </div>
          <div className="text-md md:text-lg">Los Angeles, CA</div>
          <a
            href="https://www.eventbrite.com/e/berleezy-presents-the-ball-2023-tickets-735997667837?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 px-4 py-2 text-md md:text-lg inline-block border border-white text-black bg-white rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            Buy Tickets
          </a>
        </div>

        <div className="mt-4 text-center">
          <div className="text-md md:text-lg font-semibold mb-6">
            Ticket Tiers
          </div>
          <div className="text-center max-w-[400px] m-auto">
            <div className="mb-6 max-w-[300px] m-auto border-b border-white pb-2">
              <strong className="text-md mb-6">
                The Ball (Single Night) ($99.99)
              </strong>
              <p className="text-xs mb-2">
                * Does not include entry to seated show
              </p>
              <ul className="list-inside text-md  pt-4">
                <li>- Entry to The Ball Afterparty on Saturday Night</li>
                <li>- Complimentary Drink</li>
              </ul>
            </div>
            <div className="mb-6 max-w-[300px] m-auto border-b border-white pb-2">
              <strong className="text-md mb-6">The Weekend ($149.99)</strong>
              <p className="text-xs mb-2">* Limited Quantity</p>
              <ul className="list-inside text-md  pt-4">
                <li>- Entry to Friday Night Mixer @ Secret Location in DTLA</li>
                <li>- Entry to Early Seated Show on Saturday Night</li>
                <li>- Entry to The Ball Afterparty on Saturday Night</li>
                <li>- Complimentary Drink</li>
              </ul>
            </div>
            <div className="mb-6 max-w-[300px] m-auto border-b border-white pb-2">
              <strong className="text-md mb-6">
                Weekend Premium VIP ($199.99)
              </strong>
              <p className="text-xs mb-2">* Limited Quantity</p>
              <ul className="list-inside text-md pt-4">
                <li>
                  - Q&A, Meet & Greet, Photo Op on Friday Night (Pre Mixer)
                </li>
                <li>- Entry to Friday Night Mixer @ Secret Location in DTLA</li>
                <li>- Entry to Early Seated Show on Saturday Night</li>
                <li>- Entry to The Ball Afterparty on Saturday Night</li>
                <li>- Complimentary Drink</li>
              </ul>
            </div>
            <div className="mb-6 flex flex-col">
              <strong className="text-md">
                Bottle Service Options - Coming Soon.
              </strong>
              {/* <p className="text-sm mb-6 ">
                Available on a first come first serve basis to all ticket
                holders
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="text-lg font-bold mt-4">
          Thank you for submitting your email/question!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border p-8 rounded-md w-[90%] md:w-full max-w-[540px] mt-8"
        >
          <div className="mb-6 font-semibold text-lg">
            Sign up to know when tickets go on sale first:
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mb-6 border rounded bg-black placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
          <div className="mb-6 font-semibold text-lg">
            Submit your questions if you have any and we’ll get back to you as
            quickly as possible
          </div>
          <textarea
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            className="p-2 mb-6 border rounded bg-black placeholder-gray-400"
            placeholder="Enter your question"
          />
          <div className="mb-6 flex items-baseline">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="mr-3 sm:mr-2 scale-150 sm:scale-100 text-md"
              required
            />
            <label className="text-sm">
              I understand that my email will only be used for this purpose. I
              also acknowledge that I can have my email removed at any time.
            </label>
          </div>
          <button
            type="submit"
            className="p-2 border text-md border-white text-black bg-white rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

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
      style={{ backgroundImage: "url('/bg2.png')" }}
      className="min-h-screen bg-cover bg-center flex flex-col pt-12 md:pt-0 items-center justify-start bg-[#F82F01] text-white pb-12"
    >
      {/* {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[#F82F01] bg-opacity-70">
          <div className="relative rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 text-white bg-[#F82F01] py-2 px-4 rounded-full"
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
      )} */}
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

      {/* <div className="relative w-3/4 md:w-1/3 mt-6 md:mt-12 md:max-w-[640px]">
        <Image
          src="/logo.png"
          alt="Berleezy: The Ball"
          layout="responsive"
          width={540}
          height={540}
          objectFit="contain"
        />
      </div> */}

      <div className="relative w-3/4 md:w-1/3 mt-6 md:mt-12 md:max-w-[640px] mb-10">
        <Image
          src="/hero22.png"
          alt="Berleezy: The Ball"
          layout="responsive"
          width={640}
          height={640}
          objectFit="contain"
        />
      </div>

      <div>
        <div className="text-center text-[#FFD94A]">
          <div className="text-2xl md:text-2xl font-semibold mb-4">
            October 18th-19th, 2024
          </div>
          <div className="text-xl md:text-2xl">Gilley&apos;s Dallas</div>
          <div className="text-xl md:text-2xl">1135 Botham Jean Blvd</div>
          <div className="text-xl md:text-2xl mb-4">Dallas, TX</div>
          <a
            href="https://eezyball2024.eventbrite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 px-4 py-2 text-2xl md:text-3xl inline-block border border-[#FFD94A] text-[#F82F01] bg-[#FFD94A] rounded transition duration-300 ease-in-out hover:bg-[#F82F01] hover:text-[#FFD94A]"
          >
            Buy Tickets
          </a>
        </div>

        <div className="mt-4 text-center">
          <div className="text-xl md:text-2xl text-[#FFD94A]">
            Patreon Presale: 7/16
          </div>
          <div className="text-xl md:text-2xl text-[#FFD94A] mb-4">
            General On Sale: 7/19
          </div>
          <div className="text-xl md:text-3xl font-semibold mb-6 text-[#FFD94A]">
            Ticket Tiers
          </div>
          {/* <!-- Weekend Premium VIP --> */}
          <div className="bg-[#F82F01] mb-6 md:mx-0 mx-6 max-w-[600px] m-auto border rounded-xl border-[#FFD94A] p-4 text-[#FFD94A]">
            <strong className="text-2xl mb-4 block text-start">
              Weekend Premium VIP ($399.00)
            </strong>
            <strong className="text-2xl mb-2 block text-start">
              Friday 10/18 @ Gilley&apos;s Dallas
            </strong>
            <ul className="list-inside text-xl pt-4 list-disc text-start">
              <li>Q&A w/Berleezy & Friends</li>
              <li>Meet & Greet w/Berleezy</li>
              <li>Community Mixer (food, drinks, dancing & more!)</li>
            </ul>
            <strong className="text-2xl mb-2 block mt-6 text-start">
              Saturday 10/19 @ Gilley&apos;s Dallas
            </strong>
            <ul className="list-inside text-xl pt-4 list-disc text-start">
              <li>Early Show w/Berleezy & Friends</li>
              <li>
                The Ball Main Event w/Surprise Performances (food, drinks,
                dancing & more!)
              </li>
            </ul>
          </div>

          {/* <!-- Weekend Pass --> */}
          <div className="bg-[#F82F01] mb-6 md:mx-0 mx-6 max-w-[600px] m-auto border rounded-xl border-[#FFD94A] p-4 text-[#FFD94A]">
            <strong className="text-2xl mb-4 block text-start">
              Weekend Pass ($299.00)
            </strong>
            <strong className="text-2xl mb-2 block text-start">
              Friday 10/18 @ Gilley&apos;s Dallas
            </strong>
            <ul className="list-inside text-xl pt-4 list-disc text-start">
              <li>Community Mixer (food, drinks, dancing & more!)</li>
            </ul>
            <strong className="text-2xl mb-2 block mt-6 text-start">
              Saturday 10/19 @ Gilley&apos;s Dallas
            </strong>
            <ul className="list-inside text-xl pt-4 list-disc text-start">
              <li>Early Show w/Berleezy & Friends</li>
              <li>
                The Ball Main Event w/Surprise Performances (food, drinks,
                dancing & more!)
              </li>
            </ul>
          </div>

          {/* <!-- Saturday All-Day Pass --> */}
          <div className="bg-[#F82F01] mb-6 md:mx-0 mx-6 max-w-[600px] m-auto border rounded-xl border-[#FFD94A] p-4 text-[#FFD94A]">
            <strong className="text-2xl mb-4 block text-start">
              Saturday All-Day Pass ($179.00)
            </strong>
            <strong className="text-2xl mb-2 block text-start">
              Saturday 10/19 @ Gilley&apos;s Dallas
            </strong>
            <ul className="list-inside text-xl pt-4 list-disc text-start">
              <li>Early Show w/Berleezy & Friends</li>
              <li>
                The Ball Main Event w/Surprise Performances (food, drinks,
                dancing & more!)
              </li>
            </ul>
          </div>

          {/* <!-- Saturday Night --> */}
          <div className="bg-[#F82F01] mb-6 md:mx-0 mx-6 max-w-[600px] m-auto border rounded-xl border-[#FFD94A] p-4 text-[#FFD94A]">
            <strong className="text-2xl mb-4 block text-start">
              Saturday Night ($79.00)
            </strong>
            <strong className="text-2xl mb-2 block text-start">
              Saturday 10/19 @ Gilley&apos;s Dallas
            </strong>
            <ul className="list-inside text-xl pt-4 list-disc text-start">
              <li>
                The Ball Main Event w/Surprise Performances (food, drinks,
                dancing & more!)
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="mt-12 text-center text-[#FFD94A]">
        <div className="text-xl md:text-3xl font-semibold mb-6">FAQ</div>
        <div className="bg-[#F82F01] mb-6 md:mx-0 mx-6 max-w-[800px] m-auto border rounded-xl border-[#FFD94A] p-4 text-left">
          <div className="mb-4">
            <strong className="text-xl">Q: Is there a dress code?</strong>
            <p>
              A: Please see below for our encouraged dress codes for Friday &
              Saturday:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Friday 10/18 - Cowboy Caviar (think: western glam, cocktail
                attire & cowboy boots)
              </li>
              <li>
                Saturday 10/19 - Black Tie (dress to impress, red carpet-ready!)
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <strong className="text-xl">
              Q: Where is the Friday event?/Where is the Saturday event?
            </strong>
            <p>
              A: Both Friday & Saturday nights will be held in different spaces
              all within the iconic Gilley&apos;s Dallas (1135 Botham Jean Blvd,
              Dallas, TX 75215).
            </p>
          </div>

          <div className="mb-4">
            <strong className="text-xl">
              Q: Can I buy a ticket at the door?
            </strong>
            <p>
              A: No. Tickets for this event are available online only through
              the official Eventbrite ticket link listed on www.eezyball.com. We
              are not responsible for any tickets purchased from resellers.
            </p>
          </div>

          <div className="mb-4">
            <strong className="text-xl">Q: Can I get a refund?</strong>
            <p>
              A: No refunds are offered for tickets purchased. If you are unable
              to make it, you are able to give or sell your ticket to a friend.
              We cannot facilitate the transfer of tickets - this must be
              handled independently. We are not responsible for tickets obtained
              through a third party source.
            </p>
          </div>

          <div className="mb-4">
            <strong className="text-xl">
              Q: I can&apos;t make it. Can I give my ticket to a friend?
            </strong>
            <p>
              A: Yes you may! We are not able to facilitate the transfer or
              resale of a ticket after purchase. This transaction must be
              handled between ticket purchaser and ticket receiver.
            </p>
          </div>

          <div className="mb-4">
            <strong className="text-xl">
              Q: How old do I need to be to attend?
            </strong>
            <p>
              A: You must be at least 21 by the date of this event to attend. A
              valid ID is required for entry.
            </p>
          </div>
        </div>
      </div>

      {/* {submitted ? (
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
            className="p-2 mb-6 border rounded bg-[#F82F01] placeholder-gray-400"
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
            className="p-2 mb-6 border rounded bg-[#F82F01] placeholder-gray-400"
            placeholder="Enter your question"
          />
          <div className="mb-6 flex items-baseline">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="mr-3 sm:mr-2 scale-150 sm:scale-100 text-2xl"
              required
            />
            <label className="text-sm">
              I understand that my email will only be used for this purpose. I
              also acknowledge that I can have my email removed at any time.
            </label>
          </div>
          <button
            type="submit"
            className="p-2 border text-xl border-[#FFD94A] text-black bg-white rounded transition duration-300 ease-in-out hover:bg-[#F82F01] hover:text-white"
          >
            Submit
          </button>
        </form>
      )} */}
    </div>
  );
}

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [checked, setChecked] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!checked) {
      alert(
        "Please consent to the collection of your email for waitlist purposes."
      );
      return;
    }

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen bg-black flex md:pt-0 pt-12 items-start md:items-center justify-center text-white">
      {submitted ? (
        <div className="text-lg font-bold mt-4">
          Thank you for submitting your email!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border p-8 rounded-md w-11/12 md:w-2/4 max-w-[700px]"
        >
          <div className="mb-6 font-bold text-4xl">THE BALL</div>
          <div className="mb-6 font-semibold text-left text-2xl">
            For exclusive early access, submit your email below:
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mb-6 border rounded bg-black placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
          <div className="mb-6 flex items-center text-sm leading-5 flex items-baseline">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="mr-2"
              required
            />
            <label>
              I agree to be added to the waitlist and understand that my email
              will only be used for this purpose. I also acknowledge that I can
              have my email removed from the waitlist at any time.
            </label>
          </div>
          <button
            type="submit"
            className="p-2 border border-white text-black bg-white rounded transition duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

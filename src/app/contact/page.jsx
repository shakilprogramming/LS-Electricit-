"use client"; // Add this directive to make it a Client Component

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        e.target.reset(); // Clears the input fields after successful submission
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div id="two" className="flex-1 flex justify-center pt-24"> {/* Added pt-24 for padding-top */}
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-lg font-semibold text-center mb-4">
            This is a Contact Form
          </h1>
          <input
            type="hidden"
            name="access_key"
            value="7ffe071e-7c2b-4dae-9372-bc157b60eca0"
          />

          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="subject">
              <span className="label-text">Subject</span>
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Enter the subject"
              className="input input-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              required
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="message">
              <span className="label-text">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              className="textarea textarea-bordered border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
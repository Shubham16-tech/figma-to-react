const Contact = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Lets Design Together
        </h2>

        <p className="text-gray-500 mb-10">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
          nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>

        {/* Email input */}
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-[350px] px-4 py-3 border rounded-md outline-none"
          />

          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
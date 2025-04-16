import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "293e31b4-c9fe-4da5-926e-7fc0fa861e97");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        alert("Form submitted successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        alert(data.message)
        setResult("");
      }
    };


    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id='contacts'>
            <h1 className="text-center text-2xl sm:text-4xl font-bold 
            mb-2">Contact <span className="underline underline-offset-4 
            font-light">With us</span> </h1>
            <p className="text-center text-gray-500 mb-12 ">Ready to make a move? Lets's Build your Future together</p>

            <form onSubmit={onSubmit} className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-left text-gray-700 mb-2">Your Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-left text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-left text-gray-700 mb-2">Subject</label>
                    <input
                        type="text"
                        placeholder="Inquiry about services"
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    />
                </div>

                <div>
                    <label className="block text-left text-gray-700 mb-2">Message</label>
                    <textarea
                        rows="5"
                        placeholder="Type your message here..."
                        className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                    {result ? result : "Send message"}
                </button>
            </form>

          
          
          
          

          
        </div>
    )
}

export default Contact

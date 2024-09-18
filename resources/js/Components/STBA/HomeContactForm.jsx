import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic here
        // Example: Check if the name is empty
        const validationErrors = {};
        if (!formData.name) {
            validationErrors.name = "Name is required.";
        }
        if (!formData.email) {
            validationErrors.email = "Email is required.";
        }
        if (!formData.phonenumber) {
            validationErrors.phonenumber = "Phone number is required.";
        }
        if (!formData.message) {
            validationErrors.message = "Message is required.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSuccess(true);
            // Send the form data to your backend
            // fetch('/post', { method: 'POST', body: JSON.stringify(formData) })
            console.log(formData);
        }
    };

    return (
        <div className="flex  w-full lg:shadow-2xl rounded-md">
            <div className="flex flex-col-reverse w-full lg:flex-row md:p-14">
                <div className="flex w-full h-full align-middle border-2 rounded-md">
                    <form
                        className="w-[600px] h-full p-10  rounded-lg space-y-4"
                        method="POST"
                        action="/post"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-2">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full name"
                                name="name"
                                className="input input-bordered rounded-md"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <span className="p-2 text-white bg-red-500 rounded">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="label">
                                <span className="label-text">What is your email?</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered rounded-md"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <span className="p-2 text-white bg-red-500 rounded">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="label">
                                <span className="label-text">What is your phone number?</span>
                            </label>
                            <input
                                type="number"
                                name="phonenumber"
                                placeholder="Mobile number"
                                className="input input-bordered rounded-md"
                                required
                                value={formData.phonenumber}
                                onChange={handleChange}
                            />
                            {errors.phonenumber && (
                                <span className="p-2 text-white bg-red-500 rounded">
                                    {errors.phonenumber}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="label">
                                <span className="label-text">Write your message</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered rounded-md"
                                name="message"
                                placeholder="Enter your message..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <span className="p-2 text-white bg-red-500 rounded">
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className={`btn text-white bg-black w-full ${success ? "bg-green-500" : "bg-blue-700 hover:bg-blue-800"
                                    }`}
                            >
                                {success ? "Sent Successfully" : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl c-color montserrat-title">Have any Queries!</h1>
                    <p className="py-3 text-lg sm:text-xl roboto-slab-para">
                        If you need to ask us anything fill the form we will reach you
                    </p>
                    <img src="/images/contact.png" alt="Contact" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

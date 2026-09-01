"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove field error when user starts correcting it
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Remove general error
    if (submitError) {
      setSubmitError("");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrors({});
    setSubmitError("");
    setSuccessMessage("");


    try {
      /*
       * =====================================================
       * LARAVEL API ENDPOINT
       * =====================================================
       *
       * Add this to your .env.local:
       *
       * NEXT_PUBLIC_API_URL=https://api.yourdomain.com
       *
       * Then Laravel endpoint:
       *
       * POST /api/inquiries
       *
       */

      const API_URL =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://localhost:8000";


      const response = await fetch(
        `${API_URL}/api/inquiries`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            service: formData.service,
            message: formData.message,
          }),
        }
      );


      const data = await response.json();


      /*
       * =====================================================
       * SUCCESS
       * =====================================================
       */

      if (response.ok) {
        setSuccessMessage(
          data.message ||
            "Thank you! Your inquiry has been submitted successfully. Our team will get back to you soon."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        return;
      }


      /*
       * =====================================================
       * LARAVEL VALIDATION ERRORS
       *
       * Laravel normally returns:
       *
       * {
       *   "message": "The given data was invalid.",
       *   "errors": {
       *      "email": [
       *         "The email field must be a valid email address."
       *      ]
       *   }
       * }
       *
       * =====================================================
       */

      if (response.status === 422 && data.errors) {
        setErrors(data.errors);
        return;
      }


      /*
       * =====================================================
       * GENERAL API ERROR
       * =====================================================
       */

      setSubmitError(
        data.message ||
          "Something went wrong while sending your inquiry. Please try again."
      );

    } catch (error) {

      console.error("Inquiry submission error:", error);

      setSubmitError(
        "Unable to connect to our server. Please check your connection and try again."
      );

    } finally {
      setIsSubmitting(false);
    }
  };


  /*
   * Laravel returns validation errors as arrays.
   * This helper safely displays the first message.
   */
  const getFieldError = (field) => {
    if (!errors[field]) {
      return "";
    }

    if (Array.isArray(errors[field])) {
      return errors[field][0];
    }

    return errors[field];
  };


  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-20 md:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      </div>


      {/* =====================================================
          CONTAINER
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">


          {/* =================================================
              LEFT — INFORMATION
          ================================================= */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Let's Work Together
            </div>


            {/* Heading */}
            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#101828] md:text-5xl lg:text-6xl">

              Have a project in mind?

              <span className="block text-blue-600">
                Let's talk.
              </span>

            </h2>


            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
              Whether you need a new website, reliable hosting, cloud
              infrastructure, or ongoing technical support, our team is
              ready to help you find the right solution for your business.
            </p>


            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}
            <div className="mt-9 space-y-5">

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-gray-200">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Email Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#101828]">
                    support@zsphere.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-gray-200">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#101828]">
                    +63 926 773 4945
                  </p>
                </div>

              </div>


              {/* Support */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-gray-200">
                  <MessageSquare className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Support
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#101828]">
                    ZCare+ Support Team
                  </p>
                </div>

              </div>

            </div>


            {/* =================================================
                TRUST POINTS
            ================================================= */}
            <div className="mt-10 border-t border-gray-200 pt-7">

              <div className="grid gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Professional support
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Fast response
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Tailored solutions
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Reliable technology
                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — FORM
          ================================================= */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />


            <div className="relative rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8 md:p-10">


              {/* =================================================
                  FORM HEADER
              ================================================= */}
              <div className="mb-8">

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Send an Inquiry
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#101828] md:text-3xl">
                  Tell us how we can help
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill out the form and our team will get back to you.
                </p>

              </div>


              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}
              {successMessage && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">

                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                  <div>
                    <p className="font-semibold text-emerald-800">
                      Message Sent
                    </p>

                    <p className="mt-1 text-sm leading-5 text-emerald-700">
                      {successMessage}
                    </p>
                  </div>

                </div>
              )}


              {/* =================================================
                  GENERAL ERROR
              ================================================= */}
              {submitError && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">

                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                  <div>
                    <p className="font-semibold text-red-800">
                      Unable to Send
                    </p>

                    <p className="mt-1 text-sm leading-5 text-red-700">
                      {submitError}
                    </p>
                  </div>

                </div>
              )}


              {/* =================================================
                  FORM
              ================================================= */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* =================================================
                    NAME + EMAIL
                ================================================= */}
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-[#101828] outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60 ${
                        getFieldError("name")
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />

                    {getFieldError("name") && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {getFieldError("name")}
                      </p>
                    )}

                  </div>


                  {/* Email */}
                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-[#101828] outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60 ${
                        getFieldError("email")
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />

                    {getFieldError("email") && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {getFieldError("email")}
                      </p>
                    )}

                  </div>

                </div>


                {/* =================================================
                    PHONE + SERVICE
                ================================================= */}
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Phone */}
                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Phone Number

                      <span className="ml-1 font-normal text-gray-400">
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+63 XXX XXX XXXX"
                      disabled={isSubmitting}
                      className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-[#101828] outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60 ${
                        getFieldError("phone")
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    />

                    {getFieldError("phone") && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {getFieldError("phone")}
                      </p>
                    )}

                  </div>


                  {/* Service */}
                  <div>

                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-[#101828]"
                    >
                      Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full appearance-none rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-[#101828] outline-none transition focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60 ${
                        getFieldError("service")
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="web-development">
                        Web Development
                      </option>

                      <option value="web-hosting">
                        Web Hosting
                      </option>

                      <option value="cloud-solutions">
                        Cloud Solutions
                      </option>

                      <option value="zcare-support">
                        ZCare+ Support
                      </option>

                      <option value="other">
                        Other
                      </option>

                    </select>

                    {getFieldError("service") && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {getFieldError("service")}
                      </p>
                    )}

                  </div>

                </div>


                {/* =================================================
                    MESSAGE
                ================================================= */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#101828]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, requirements, or questions..."
                    disabled={isSubmitting}
                    className={`w-full resize-none rounded-xl border bg-gray-50 px-4 py-3.5 text-sm leading-6 text-[#101828] outline-none transition placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60 ${
                      getFieldError("message")
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    }`}
                  />

                  {getFieldError("message") && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {getFieldError("message")}
                    </p>
                  )}

                </div>


                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1264ff] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message

                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}

                </button>


                {/* Privacy */}
                <p className="text-center text-xs leading-5 text-gray-400">
                  By submitting this form, you agree to be contacted by
                  Zsphere Technologies regarding your inquiry.
                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

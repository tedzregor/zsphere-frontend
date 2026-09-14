"use client";

import { submitInquiry, InquiryApiError } from "@/services/inquiry.service";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

interface PricingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string;
  price: string;
}

export default function PricingInquiryModal({
  isOpen,
  onClose,
  service,
  price,
}: PricingInquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
  });

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);
  setSubmitError("");
  setErrors({});

  try {
    const data = await submitInquiry({
      name: formData.fullName,
      email: formData.email,
      phone: formData.contactNumber,
      status: "New",
      source: "Web",
      service: service,
      message: `I am interested in ${service} with a listed price of ${price}.`,
    });

    console.log("Inquiry submitted:", data);

    setSubmitted(true);
  } catch (error) {
    console.error("Inquiry submission failed:", error);

    if (error instanceof InquiryApiError) {
      // Laravel validation errors
      if (error.status === 422 && error.errors) {
        setErrors(error.errors);
        return;
      }

      setSubmitError(
        error.message ||
          "Something went wrong while submitting your inquiry."
      );

      return;
    }

    setSubmitError(
      "Unable to connect to our server. Please check your connection and try again."
    );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#101828]">
                Submit Your Inquiry
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and our team will get in touch with you.
              </p>
            </div>

            {/* Selected Service */}
            <div className="mb-6 rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Service
                  </p>
                  <p className="mt-1 font-semibold text-[#101828]">
                    {service}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Price
                  </p>
                  <p className="mt-1 font-bold text-indigo-600">
                    {price}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            {submitError && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {submitError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name[0]}
                  </p>
                )}

                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email[0]}
                  </p>
                )}

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Contact Number
                </label>

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone[0]}
                  </p>
                )}

                <input
                  type="tel"
                  required
                  value={formData.contactNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactNumber: e.target.value,
                    })
                  }
                  placeholder="Enter your contact number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gradient-to-r from-teal-900 via-indigo-600 to-teal-900 px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          /* Confirmation */
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2
                size={48}
                className="text-green-600"
                strokeWidth={2}
              />
            </div>

            <h2 className="text-2xl font-bold text-[#101828]">
              Inquiry Submitted!
            </h2>

            <p className="mt-3 max-w-md text-gray-600">
              Thank you for your interest in{" "}
              <span className="font-semibold text-[#101828]">
                {service}
              </span>
              .
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              We have received your inquiry and our team will review your
              request. We will contact you within{" "}
              <span className="font-semibold text-gray-700">
                24 hours
              </span>{" "}
              using the contact information you provided.
            </p>

            {/* Submitted Service */}
            <div className="mt-6 w-full rounded-xl bg-gray-50 p-4 text-left">
              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-xs text-gray-500">Service</p>
                  <p className="mt-1 font-semibold text-[#101828]">
                    {service}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="mt-1 font-bold text-indigo-600">
                    {price}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-lg bg-[#101828] px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
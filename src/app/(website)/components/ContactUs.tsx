"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#1a1a1a] py-16 md:px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-[#2a2a2a] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Last Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300 text-sm">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300 text-sm">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300 text-sm">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 h-12"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300 text-sm">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border-none text-white placeholder:text-gray-500 min-h-[120px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  className="bg-[#BA5EEF] hover:bg-[#A54DD9] text-white font-semibold px-8 py-6 rounded-lg text-base transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            {/* Header with Purple Badge */}
            <div className="inline-block">
              <div className="bg-[#BA5EEF] text-white font-bold text-2xl md:text-3xl px-8 py-4 rounded-xl">
                Contact Us
              </div>
            </div>

            {/* Subtitle */}
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              We Are Here to Support You
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed">
              Customer support is our highest priority. We&apos;re here to answer all
              your questions via our 24/7 Live Chat and Support line that calls
              straight into Mark&apos;s personal phone.
            </p>

            {/* Divider */}
            <div className="border-t-2 border-dashed border-gray-600 my-8"></div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
                className="mt-1 border-gray-500 data-[state=checked]:bg-[#BA5EEF] data-[state=checked]:border-[#BA5EEF]"
              />
              <Label
                htmlFor="terms"
                className="text-gray-300 text-sm leading-relaxed cursor-pointer"
              >
                By submitting you accept our{" "}
                <a
                  href="#"
                  className="text-[#BA5EEF] hover:underline font-medium"
                >
                  Terms and Conditions
                </a>
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
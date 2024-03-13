import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactus } from "./action";

export default function Contact() {
  return (
    <main className="px-4 py-20 xl:mx-auto xl:max-w-4xl">
      <div className="space-y-2 py-10 xl:space-y-4">
        <h1 className="text-4xl font-semibold xl:text-6xl">Contact Us</h1>

        <p>
          Want to collaborate with us, have an enquiry or are you looking to
          join our team? Contact us via the form below and we will get back to
          you as soon as possible.
        </p>
      </div>

      <form
        action={contactus}
        className="gap-4 space-y-4 text-secondary-foreground xl:grid xl:grid-cols-2 xl:space-y-0"
      >
        <label className="block space-y-1 font-semibold">
          <span>Your Name</span>
          <Input placeholder="john doe" />
        </label>

        <label className="block space-y-1 font-semibold">
          <span>Your Email</span>
          <Input type="email" placeholder="john@email.com" />
        </label>

        <label className="block space-y-1 font-semibold">
          <span>Company Name</span>
          <Input placeholder="company name" />
        </label>

        <label className="block space-y-1 font-semibold">
          <span>Company Website</span>
          <Input placeholder="https://..." />
        </label>

        <label className="col-span-2 block space-y-1 font-semibold">
          <span>Message</span>
          <Textarea placeholder="Enter your message here..." />
        </label>

        <button className="flex items-center justify-center rounded-lg bg-accent-blue px-8 py-2 font-semibold text-white xl:justify-self-start">
          Submit
        </button>
      </form>
    </main>
  );
}

"use client";

import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { toast } = useToast();

  return (
    <div>
      <motion.section
        id="contact"
        className="my-14 scroll-mt-28 sm:mb-28 w-[min(100%, 38rem)] text-center"
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="-mt-6 text-slate-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:rezafarooque@outlook.com">
            rezafarooque@outlook.com
          </a>{" "}
          or through this form.
        </p>

        <form
          action={async (formDate) => {
            const { data, error } = await sendEmail(formDate);

            if (error) {
              toast({
                description: error,
              });
              return;
            }
            toast({
              description: "Email sent successfully",
            });
          }}
          className="flex flex-col mt-10 dark:text-black"
        >
          <input
            type="email"
            className="px-4 transition-all border rounded-lg h-14 border-black/10 dark:bg-opacity-80 dark:bg-white dark:focus:bg-opacity-100 dark:outline-none dark:placeholder:text-black/80"
            placeholder="Your email"
            name="senderEmail"
            required={true}
            maxLength={90}
          />
          <textarea
            className="p-4 my-3 transition-all border rounded-lg h-52 border-black/10 dark:bg-opacity-80 dark:bg-white dark:focus:bg-opacity-100 dark:outline-none dark:placeholder:text-black/80"
            placeholder="Your message"
            name="message"
            required={true}
            maxLength={500}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    </div>
  );
}

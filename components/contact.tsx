'use client';

import { useSectionInView } from '@/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/send-email';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import { toast } from 'sonner';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <div>
      <motion.section
        id="contact"
        className="w-[min(100%, 38rem)] my-14 scroll-mt-28 text-center sm:mb-28"
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
          Please contact me directly at{' '}
          <a className="underline" href="mailto:rezafarooque@outlook.com">
            rezafarooque@outlook.com
          </a>{' '}
          or through this form.
        </p>

        <form
          action={async (formDate) => {
            const { data, error } = await sendEmail(formDate);

            if (error) {
              toast.error(
                'There was an error sending your message. Please try again later.',
              );
              console.error('Error sending email:', error);
              return;
            }
            if (data) {
              toast.success('Your message has been sent successfully!');
              console.log('Email sent successfully:', data);
            }
          }}
          className="mt-10 flex flex-col dark:text-black"
        >
          <input
            type="email"
            className="dark:bg-opacity-80 dark:focus:bg-opacity-100 h-14 rounded-lg border border-black/10 px-4 transition-all dark:bg-white dark:outline-none dark:placeholder:text-black/80"
            placeholder="Your email"
            name="senderEmail"
            required={true}
            maxLength={90}
          />
          <textarea
            className="dark:bg-opacity-80 dark:focus:bg-opacity-100 my-3 h-52 rounded-lg border border-black/10 p-4 transition-all dark:bg-white dark:outline-none dark:placeholder:text-black/80"
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

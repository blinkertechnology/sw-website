import { FaqHeader } from "@/components/FaqHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GET_STARTED_QUESTIONS = [
  {
    question: "What is Sorted Wallet?",
    solution: [
      "Sorted Wallet is the first crypto wallet designed for KaiOS feature phone users. It enables users to securely store, send, and receive digital assets with ease, even without owning a high-end smartphone. Our aim is to make crypto accessible to everyone.",
      "You can easily download Sorted Wallet from the KaiStore on your KaiOS device.",
    ],
  },
  {
    question: "How to register for Sorted Wallet?",
    solution: [
      "Sorted Wallet is the first crypto wallet designed for KaiOS feature phone users. It enables users to securely store, send, and receive digital assets with ease, even without owning a high-end smartphone. Our aim is to make crypto accessible to everyone.",
      "You can easily download Sorted Wallet from the KaiStore on your KaiOS device.",
    ],
  },
  {
    question: "How to register for Sorted Wallet?",
    solution: [
      "Sorted Wallet is the first crypto wallet designed for KaiOS feature phone users. It enables users to securely store, send, and receive digital assets with ease, even without owning a high-end smartphone. Our aim is to make crypto accessible to everyone.",
      "You can easily download Sorted Wallet from the KaiStore on your KaiOS device.",
    ],
  },
  {
    question: "How to register for Sorted Wallet?",
    solution: [
      "Sorted Wallet is the first crypto wallet designed for KaiOS feature phone users. It enables users to securely store, send, and receive digital assets with ease, even without owning a high-end smartphone. Our aim is to make crypto accessible to everyone.",
      "You can easily download Sorted Wallet from the KaiStore on your KaiOS device.",
    ],
  },
  {
    question: "How to register for Sorted Wallet?",
    solution: [
      "Sorted Wallet is the first crypto wallet designed for KaiOS feature phone users. It enables users to securely store, send, and receive digital assets with ease, even without owning a high-end smartphone. Our aim is to make crypto accessible to everyone.",
      "You can easily download Sorted Wallet from the KaiStore on your KaiOS device.",
    ],
  },
];

export default function Faq() {
  return (
    <>
      <FaqHeader />

      <div className="grid grid-cols-1 xl:mx-auto xl:max-w-6xl xl:grid-cols-2 xl:gap-x-20">
        <div>
          <h2 className="my-10 px-4 text-2xl font-semibold xl:text-4xl">
            How to get started with sorted?
          </h2>

          <section className="space-y-4 px-4">
            <Accordion type="single" collapsible>
              {GET_STARTED_QUESTIONS.map(({ question, solution }, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="xl:border-b"
                >
                  <AccordionTrigger className="font-semibold text-secondary-foreground">
                    {question}
                  </AccordionTrigger>

                  <AccordionContent className="space-y-4 pb-8 text-secondary-foreground">
                    {solution.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        <div className="hidden xl:block">
          <div className="">
            <h2 className="my-10 px-4 text-2xl font-semibold xl:text-4xl">
              What is Blockchain?
            </h2>

            <section className="space-y-4 px-4">
              <Accordion type="single" collapsible>
                {GET_STARTED_QUESTIONS.slice(0, 3).map(
                  ({ question, solution }, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="xl:border-b"
                    >
                      <AccordionTrigger className="font-semibold text-secondary-foreground">
                        {question}
                      </AccordionTrigger>

                      <AccordionContent className="space-y-4 pb-8 text-secondary-foreground">
                        {solution.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ),
                )}
              </Accordion>
            </section>
          </div>

          <div className="">
            <h2 className="my-10 px-4 text-2xl font-semibold xl:text-4xl">
              Troubleshooting
            </h2>

            <section className="space-y-4 px-4">
              <Accordion type="single" collapsible>
                {GET_STARTED_QUESTIONS.slice(3).map(
                  ({ question, solution }, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="xl:border-b"
                    >
                      <AccordionTrigger className="font-semibold text-secondary-foreground">
                        {question}
                      </AccordionTrigger>

                      <AccordionContent className="space-y-4 pb-8 text-secondary-foreground">
                        {solution.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ),
                )}
              </Accordion>
            </section>
          </div>
        </div>
      </div>

      <div className="h-40" />
    </>
  );
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const getFaqs = (t: (key: string) => string): FaqItem[] => [
  {
    question: t("faq.1.q"),
    answer: t("faq.1.a")
  },
  {
    question: t("faq.2.q"),
    answer: t("faq.2.a")
  },
  {
    question: t("faq.3.q"),
    answer: t("faq.3.a")
  },
  {
    question: t("faq.4.q"),
    answer: t("faq.4.a")
  }
];

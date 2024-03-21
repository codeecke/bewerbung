import FAQ from "../components/FAQ/FAQ";
import faqData from "@shared/data/faq.json";

export default () => (
  <>
    <h1>Häufig gestellte Fragen</h1>
    {faqData.map((question, key) => (
      <FAQ key={key} question={question} />
    ))}
  </>
);

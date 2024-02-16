import Accordion from "./Component";
import accordionData from "../data/data";

const App = () => {
  const accordionComponents = accordionData.map((accordionItem) => {
    return (
      <Accordion
        key={accordionItem.id}
        title={accordionItem.title}
        content={accordionItem.content}
      />
    );
  });

  return <div className="accordion-wrapper">{accordionComponents}</div>;
};
export default App;

import { DefaultLayout } from "@/components";
import { About, Contact, Project } from "./containers";

function App() {
  return (
    <DefaultLayout>
      <About />
      <Project />
      <Contact />
    </DefaultLayout>
  );
}

export default App;

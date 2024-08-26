import Data from "./meusComponentes/Data";
import Contador from "./meusComponentes/ContadorV2"; // quando a exportação é por padrão, 
                                                   //nao precisa de colchetes na importação

function App() {
  return (
    <div className="App">
      <Data texto = "Data e hora atuais: "/>
      <Data texto = "Data e hora em Londres: "/>
      <Data texto = "Data e hora em Nova York: "/>
      <Contador/>
    </div>
  );
}

export default App;

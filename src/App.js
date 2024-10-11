import Data from "./meusComponentes/Data";
import DataV2 from "./meusComponentes/DataV2";
import Contador from "./meusComponentes/ContadorV2"; // quando a exportação é por padrão, 
                                                   //nao precisa de colchetes na importação

function App() {
  return (
    <div className="App">
      <Data texto = "Data e hora atuais: "/>
      <Data texto = "Data e hora em Londres: "/>
      <Data texto = "Data e hora em Nova York: "/>
      <DataV2 texto = "Data JSX" timeZone={-3.00}/>
      <Contador/>
    </div>
  );
}

export default App;

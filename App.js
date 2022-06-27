import { View } from 'react-native';
import { Sup} from './componentes/blocosup';
import { Quad1 } from './componentes/quadrado1';
import { Ret1 } from './componentes/retangulo1';
import { Ret2 } from './componentes/retangulo2';
import { Quad2 } from './componentes/quadrado2';
import { Ret3 } from './componentes/retangulo3';


export default function App() {
  return (
    <View style={{flex: 1 }}>
     
        <Sup/>
        <Quad1/> 
        <Ret1/> 
        <Ret2/> 
        <Quad2/>
        <Ret3/>
      

    </View>
  );
}




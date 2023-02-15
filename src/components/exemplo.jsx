import {useState} from 'react';


const Exemplo = () => {

        const [contador,setContador] = useState(0);

        return(
      
            <div>
                    <h1>{contador}</h1>
                    <h2>
                        Cliques
                    </h2>

                    <button onClick={()=> setContador(contador+1)} >
                        
                        Clique!
                        
                    </button>


            </div>


        );

}


export default Exemplo;
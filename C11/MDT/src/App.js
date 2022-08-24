import FormularioPaciente from './FormularioPaciente';
import ListaPacientes from "./ListaPacientes";
import { useState } from 'react';

function App (){


    const [pacientes, setPacientes] = useState([]); // useState() => es un HOOK

    function guardarPaciente(event) {
        event.preventDefault();

        // const inputName = 
        // const inputLastName = 

        const nuevoPaciente = {
            nombre: event.target.name.value,
            apellido: event.target.lastName.value
        }

        // Le decimos que agregue a lo que ya habia el nuevo objeto

        setPacientes([...pacientes, nuevoPaciente])
        event.target.name.value="";
        event.target.lastName.value="";

    }

    return (
        <div>
            <FormularioPaciente onPaciente={guardarPaciente}/>
            <ListaPacientes resultados={pacientes}/>
        </div>
    )

}

export default App;
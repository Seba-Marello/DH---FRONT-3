
function ListaPacientes(props){

    return (
        <ul>
            {props.resultados.map((paciente, index) =>
            
            <li key={index}>Paciente: {paciente.nombre} {paciente.apellido} turno n: {index + 1}
            </li>
            
            )}
        </ul>
    );
}


export default ListaPacientes;
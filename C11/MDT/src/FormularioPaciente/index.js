function FormularioPaciente(props) {
    return (
        <form onSubmit={props.onPaciente}> {/*guardarPaciente*/}
            <p>Ingrese su nombre: <input type="tex" name="name"/></p>
            <p>Ingrese su apellido: <input type="tex" name="lastName"/></p>
            <input type="submit" value="sumar"/>

        </form>
    )
}

export default FormularioPaciente;
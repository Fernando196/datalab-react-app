export default function loginValidator(values){
    let errors = {};

    if(!values.usuario){
        errors.usuario = `Usuario es requerido.`;
    }

    if(!values.password){
        errors.password = 'La contraseña es requerida.'
    }

    return errors;
}
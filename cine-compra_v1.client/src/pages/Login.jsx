import styled from 'styled-components'

const Container = styled.section`
    min-height: 100vh;
    padding: 4rem;

`
const ContainerV = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 0 50%;
    background-image: url('/public/img-login.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const LoginContent = styled.div`
    max-width: 60rem;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: white;
        h1{
            position: relative;
            display: inline-block;
            font-size: 5.6rem;
            font-weight: 700;
            line-height: 1.3;
        }
        h2{

            color: white;
        }
    }
`

export const Login = () => {
    return (
        <>
            <Container>
                <ContainerV>
                    <LoginContent>
                        <div>
                            <h1>Welcome!!</h1>  
                            <h2>Log in</h2>
                            <form>
                                <input
                                    type = 'email'
                                    placeholder='Correo'

                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                />
                                <div>
                                    <span>Registrate aqui</span>
                                    <span>¿Olvidaste tu contraseña?</span>
                                </div>
                                <button type='submit'>Iniciar Sesion</button>
                            </form>
                        </div>

                    </LoginContent>
                </ContainerV>    
            {/*    <tbody>*/}
            {/*        <td>Calculo: 9.36 </td>*/}
            {/*        <td>Fundamentos: {(8.85 + 8.68) / 2}</td>*/}
            {/*        <td>Herramientas digitales: </td>*/}
            {/*        <td>Mecanica de los fluidos: {(7.62 + 8.25) / 2}</td>*/}
            {/*        <td>Metodologia: 8.45</td>*/}
            {/*        <td>Programacion: {(8.24 + 9.11) / 2}</td>*/}
            {/*        <td>Quimica: {(8.65 + 7.05)/2}</td>*/}
            {/*</tbody>*/}
            </Container> 
        </>
    );
}
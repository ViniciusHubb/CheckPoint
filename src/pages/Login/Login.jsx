import styles from './Login.module.css'


export function Login () {

    const handleLogin = (event) => 
        event.preventDefault(); 
        console.log('Form enviado!');

return (
   <form className={styles.loginBox} onSubmit={handleLogin} > 

   <h2> CheckPoint</h2>
    
   <input type="text" placeholder="Usuário" />
   <input type="text" placeholder="Senha" />
   <a href="#">Esqueceu sua senha?</a>
   <button  type="submit">Entrar</button>

   </form>


)



}

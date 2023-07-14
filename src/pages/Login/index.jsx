import React, { useContext } from 'react';
import styles from './Login.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const { signIn, signed } = useContext(UserContext);
    
    if(signed) { 
        return <Navigate to="/form" />;         
    } 

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleValidation = (id) => {
        const form = document.getElementById(id);
        const email = form.elements.username.value;
        const password = form.elements.password.value;
        const isEmailValid = validateEmail(email);
        let error = 0; 

        if(!isEmailValid) {
            toast.error('E-mail invalido!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            error++;
        }

        if(password.length == 0) {
            toast.error('Informe a senha!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            error++;
        }

        if(error > 0) {
            return false;
        }else {
            return true;
        }
            
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const form = document.getElementById("loginForm");        
        const flag = handleValidation("loginForm");
        if(!flag) {
            toast.error('Credenciais erradas!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        } 

        const email = form.elements.username.value;
        const password = form.elements.password.value;
        signIn(email, password)
        .then((message) => {
            console.log(message);
            if(message === 'E-mail ou senha incorreta') {
                toast.error('E-mail ou senha incorreta!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        })
        .catch((error) => {
            console.error(error);
            toast.error('Erro no servidor. Favor tentar mais tarde!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
    }


  return (
    <div className={styles.login}>
        <div className={styles.login__container}>
            <h1>Login</h1>
            <form id="loginForm" method="post">
                <input type="text" name="username" placeholder="username@hotmail.com" required="required" />
                <input type="password" name="password" placeholder="Password" required="required" />
                <button type="button" onClick={handleLogin}>Entrar</button>
            </form>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  )
}

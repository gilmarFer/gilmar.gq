import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import './contac.css';

export default function Contanct() {
  const {
    register, errors, handleSubmit, reset,
  } = useForm();

  const toastifySuccess = () => {
    toast.success('Email enviado com sucesso!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const toastifyError = () => {
    toast.error('Email não enviadom, erro desconhecido', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        from_name: data.name,
        to_name: data.email,
        message: data.message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID,
      );
      toastifySuccess();
      reset();
    } catch (e) {
      toastifyError();
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="contact-main">
        <div id="contact-container" className="global-container">
          <h2>Contato</h2>
          <div id="contact-sides">
            <div id="contact-left">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/fernandes-gilmar/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in" />
                    <h5>linkedin.com/in/fernandes-gilmar</h5>
                  </a>
                </li>
                <li>
                  <a href="mailto:gilmar.aquino@live.com" target="_blank" rel="noreferrer">
                    <i className="far fa-envelope" />
                    <h5>gilmar.aquino@live.com</h5>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gilmar.fer/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" />
                    <h5>instagram.com/gilmar.fer</h5>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/gilmarFer" target="_blank" rel="noreferrer">
                    <i className="fab fa-github" />
                    <h5>github.com/gilmarFer</h5>
                  </a>
                </li>
              </ul>
            </div>
            <div id="contact-right">
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div id="contact-row-1">
                  <input
                    type="text"
                    name="name"
                    ref={register({
                      required: { value: true, message: 'Por favor digite seu nome!' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less',
                      },
                    })}
                    placeholder="Nome"
                  />
                  <input
                    type="email"
                    name="email"
                    ref={register({
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="form-control formInput"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  rows={3}
                  name="message"
                  ref={register({
                    required: true,
                  })}
                  className="form-control formInput"
                  placeholder="Mensage"
                />
                <button className="submit-btn" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

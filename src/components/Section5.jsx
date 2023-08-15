import React,{ useState,useRef } from "react";
import { TextField } from "@mui/material";
import curvLine from "../assets/contact-curv.png";
import curvLinetwo from "../assets/contact-curvtwo.png";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

let YOUR_SERVICE_ID = "service_3xph138";
let YOUR_TEMPLATE_ID = "template_wtl7g34";
let YOUR_PUBLIC_KEY = "LhPSPNn0h4McdtXDQ";

function Section5() {
  const form = useRef();
  let [email_id, setEmail_id] = useState('')
  let [from_name, setFrom_name] = useState('')
  let [message, setMessage] = useState('')
  let [job_name, setJob_name] = useState('')

  const submit = (e) => {
    e.preventDefault();

    if (
      email_id !== "" &&
      from_name !== "" &&
      message !== "" &&
      job_name !== ""
    ) { 
      emailjs
        .sendForm(
          YOUR_SERVICE_ID,
          YOUR_TEMPLATE_ID,
          form.current,
          YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Su mensaje ha sido enviado satisfactoriamente",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.text,
            });
          }
        );
   } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor complete todos los campos",
      });
    } 
  };

  return (
    <div id="section-5" className="section-5">
      <div className="contact">
        <div className="contact-header">
          <h2 className="contact-title">Contactanos 📱</h2>
          <p className="contact-text">
            Si consideras que cumplis con las caracteristicas que conforman a
            FOCO no dudes en <br />
            dejarnos tu CV, queremos conocerte !
          </p>
        </div>
        <figure className="absolute">
          <img className="curvy-line" src={curvLine} />
        </figure>
        <form className="contact-form" ref={form} onSubmit={submit}>
          <TextField label="Nombre" variant="outlined" name="from_name" id="from_name" onChange={x=>setFrom_name(x.target.value)}/>
          <TextField label="Email" variant="outlined" name="email_id" id="email_id" onChange={x=>setEmail_id(x.target.value)}/>
          <TextField
            label="Puesto que aspira"
            variant="outlined"
            name="job_name" 
            id="job_name"
            onChange={x=>setJob_name(x.target.value)}
          />
          <textarea
            className="text-area"
            cols="30"
            rows="10"
            placeholder="Carta de presentación"
            name="message" 
            id="message"
            onChange={x=>setMessage(x.target.value)}
          ></textarea>
          <label for="customFile" class="custom-file-input">
            + Añadir CV (.pdf)
            <input
              type="file"
              class="custom-file-input d-none"
              name="cv" 
              id="customFile"
            />
          </label>
          <button className="contact-btn">Enviar</button>
        </form>
        <figure className="absolute">
          <img className="curvy-line-2" src={curvLinetwo} />
        </figure>
      </div>
    </div>
  );
}

export default Section5;

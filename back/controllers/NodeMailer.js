const nodemailer = require("nodemailer");

const sendEmail = (user, response) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'cristianlunadev@gmail.com',
          pass: 'sauvignon1989',
        },
      });
      let mailOptions = {
        from: 'cristianlunadev@gmail.com',
        to: `${user.email}`,
        subject: 'Condigo de verificación',
        text: "",
        html: `
        <h2>ePayCo: Confirmacion de pago</h2>
        <div><b>Codigo:</b> <span>${response.codigo}</span></div>
        <div><b>Id Sesion:</b> <span>${response.eid}</span></div>
        `
      }
      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          console.log(error, "Email NO enviado");
        } else {
          console.log("Email enviado");
        }
      });
}

const sendConfirmEmail = (user, response) => {
  let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'cristianlunadev@gmail.com',
        pass: 'sauvignon1989',
      },
    });
    let mailOptions = {
      from: 'cristianlunadev@gmail.com',
      to: `${user.email}`,
      subject: 'Pago realizado',
      text: "",
      html: `<h1>${response.mensaje} su saldo en cuenta es de $${response.saldo}</h1>`
    }
    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log(error, "Email NO enviado");
      } else {
        console.log("Email enviado");
      }
    });
}

module.exports = { sendEmail, sendConfirmEmail }
/*
    CONSEGNA
    Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

    Bonus
    Abbellire con CSS o Bootstrap
    Inserire un bottone che al click faccia il fetch di altre 10 mail (sostituendo le altre)
*/
axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((res) => {
    // codice da eseguire in caso di successo
    console.log("request is gonna be all right!", res.data);

    const listAddress = res.data.response;

    console.log(listAddress);

    const numShowEmails = 10;

    const [email] = listAddress;

    const newListAddress = [];

    newListAddress.forEach((email, numShowEmails, listAddress) = {
        newListAddress.push(email)
    });
  })
  .catch((error) => {
    console.log("something wrong is happening", error);
  });
 
export const MODALE = "MODALE";
export const CLOSEMODAL = "CLOSEMODAL";
export const LOGIN= "LOGIN";


export const setModale = (modal) => ({
    type: MODALE,
    modal: modal,
  });

  export const closeDisplayModale = (modal) => ({
    type: CLOSEMODAL,
    modal: modal,
  });

  export const modaleLoged = (login) => ({
    type: LOGIN,
    login: login,
  });
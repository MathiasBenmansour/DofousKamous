export const MODALE = "MODALE";
export const CLOSEMODAL = "CLOSEMODAL";
export const LOGED = "LOGED";


export const setModale = (modal) => ({
    type: MODALE,
    modal: modal,
  });

  export const closeDisplayModale = (modal) => ({
    type: CLOSEMODAL,
    modal: modal,
  });

  export const modaleLoged = (loged) => ({
    type: LOGED,
    loged: loged,
  });
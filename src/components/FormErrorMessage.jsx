import React from "react";
import s from "./YouTubeForm.module.css"

const FormErrorMessage = (props) => {

  return (

    <div className={s.errorMessage}>
      {props.children}
    </div>
  )

}

export default FormErrorMessage
import React from "react";
import s from "./YouTubeForm.module.css"
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from "formik"
import * as Yup from 'yup'
import FormErrorMessage from "./FormErrorMessage";

let initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: ""
  },
  phoneNumbers: ["", ""],
  hobbies : [""]
}

let validationSchema = Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string().email("Invalid email format").required('This field is required'),
  channel: Yup.string().required('This field is required'),


})

const YouTubeForm = (props) => {
  return (
    <Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={validationSchema}>
      <div className={s.formikForm}>

        <Form>

          <div className={s.name}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" placeholder="Enter your name"/>
            <ErrorMessage name="name" component={FormErrorMessage}/>
          </div>

          <div className={s.email}>
            <label htmlFor="email">E-mail</label>
            <Field type="text" id="email" name="email" placeholder="Enter your e-mail"/>
            <ErrorMessage name="email" component={FormErrorMessage}/>
          </div>

          <div className={s.channel}>
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" placeholder="Enter your channel name"/>
            <ErrorMessage name="channel" component={FormErrorMessage}/>
          </div>

          <div className={s.comments}>
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" placeholder="Enter your comment"/>
            <ErrorMessage name="comments" component={FormErrorMessage}/>
          </div>

          <div className={s.address}>
            <label htmlFor="address">Address</label>
            <Field name="address">
              {

                (props) => {
                  console.log("Field rendered")
                  const {field, form, meta} = props
                  return (
                    <div>
                      <input id="address" type="text" {...field} placeholder="Enter your address"/>
                      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                    </div>

                  )

                }

              }
            </Field>
            <ErrorMessage name="address" component={FormErrorMessage}/>
          </div>

          <div className={s.facebook}>
            <label htmlFor="facebook">Facebook profile</label>
            <Field type="text" id="facebook" name="social.facebook" placeholder="Enter your facebook profile"/>
            <ErrorMessage name="facebook" component={FormErrorMessage}/>
          </div>

          <div className={s.twitter}>
            <label htmlFor="twitter">Twitter profile</label>
            <Field type="text" id="twitter" name="social.twitter" placeholder="Enter your twitter profile"/>
            <ErrorMessage name="twitter" component={FormErrorMessage}/>
          </div>

          <div className={s.primaryPhone}>
            <label htmlFor="primaryPhone">Primary phone</label>
            <Field type="text" id="primaryPhone" name="phoneNumbers[0]" placeholder="Enter your primary phone"/>
            <ErrorMessage name="primaryPhone" component={FormErrorMessage}/>
          </div>

          <div className={s.secondaryPhone}>
            <label htmlFor="secondaryPhone">Secondary phone</label>
            <Field type="text" id="secondaryPhone" name="phoneNumbers[1]" placeholder="Enter your secondary phone"/>
            <ErrorMessage name="secondaryPhone" component={FormErrorMessage}/>
          </div>


          <div className={s.hobbies}>
            <label htmlFor="hobbies">List of hobbies</label>
            <FieldArray name="hobbies">
              {
                (props) => {
                  const {push, remove, form} = props
                  const {values} = form
                  const {hobbies} = values
                  return(
                    <div>
                      {hobbies.map((hobbie, index) => (
                      <div key={index}>
                        <Field name={`hobbies[${index}]`} placeholder="Enter your hobby" />
                        <button type="button" onClick={() => remove(index)} disabled={hobbies.length <= 1}> - </button>
                        <button type="button" onClick={() => push('')}> + </button>
                      </div>
                      ))}
                    </div>
                  )
                }

              }

            </FieldArray>
          </div>



          <div className={s.button}>
            <button type='submit'>Submit</button>
          </div>

        </Form>

      </div>
    </Formik>

  )

}

export default YouTubeForm
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import css from "./CamperForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const CamperForm = () => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ username: "", email: "", date: "", comment: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="username"
            placeholder="Name"
            className={css.name}
          />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={css.email}
          />
          <div className={css.dateBtn}>
            <DatePicker
              selected={startDate}
              name="date"
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              disabledKeyboardNavigation
              placeholderText="Booking date"
              className={css.date}
            />
            <button className={css.button}>
              <FiCalendar />
            </button>
          </div>
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={css.comment}
          />
          <button type="submit" className={css.btn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CamperForm;

import { useState } from 'react';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

export const ContactForm = () => {
  const [formValues, setFormValues] = useState();

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row first-row">
        <Input
          hideLabel
          required
          name="name"
          label="Full name"
          placeholder="Full name"
          onChange={handleChange}
        />
      </div>

      <div className="row second-row">
        <Input
          hideLabel
          required
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>

      <div className="row third-row">
        <TextArea
          hideLabel
          required
          name="message"
          label="Enter your message:"
          placeholder="Text message"
          onChange={handleChange}
        />
      </div>

      <div className="row last-row">
        <Button
          wide
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

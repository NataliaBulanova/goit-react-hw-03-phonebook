import PropTypes from "prop-types";
import { ContactText } from "./ContactItem.styled";
import { Button } from "../ContactForm/ContactForm.styled";

const ContactItem = function ({ name, number, onDelete }) {
  return (
    <>
      <ContactText>
        {name}: {number}
      </ContactText>
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContactItem;

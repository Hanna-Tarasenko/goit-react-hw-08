import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import { selectDeletingIds } from "../../redux/contacts/selectors";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector(selectDeletingIds);
  const isDeleting = deletingIds.includes(id);

  const handleDelete = () => {
    if (!isDeleting) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button className={s.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

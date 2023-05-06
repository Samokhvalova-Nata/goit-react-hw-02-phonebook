import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import {List} from './ContactList.styled'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number } ) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={() => onDeleteContact(id)}
                >
                </ContactItem>
            ))}
        </List>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func.isRequired,
}
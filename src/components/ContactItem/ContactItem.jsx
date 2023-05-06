import PropTypes from 'prop-types';
import {Item, Text, Button} from './ContactItem.styled'

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <Item>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
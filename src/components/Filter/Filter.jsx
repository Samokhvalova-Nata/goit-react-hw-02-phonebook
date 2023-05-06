import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <>
            <Label htmlFor='search'>
                Find contacts by name
                <Input
                type="text"
                name="search"
                value={value}
                onChange={onChange}/>
            </Label>
            
        </>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
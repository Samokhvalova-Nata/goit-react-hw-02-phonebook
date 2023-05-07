import { Component } from 'react';
import { Container, Titile, SubTitile } from './APP.styled';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { nanoid } from 'nanoid';
import initialContacts from '../../data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }

  formSubmitHandler = (values) => {
    const { contacts } = this.state
    const newName = contacts.some(contact =>
      contact.name.toLowerCase() === values.name.toLowerCase());

    if (newName) {
      return alert(`${values.name} is already in contacts`);
    }

    this.setState((prev) => {
      return {
        contacts: prev.contacts.concat({ ...values, id: nanoid()})
      }
    })
  }

  deleteContact = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter));
  }

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Titile>Phonebook</Titile>
        <ContactForm onSubmit={this.formSubmitHandler} />
        
        <SubTitile>Contacts</SubTitile>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Container>
    )
  };
}
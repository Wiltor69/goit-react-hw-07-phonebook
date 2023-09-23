// import { Block } from './App.styled';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ListContact } from './ListContact/ListContact';
import { SearchBar } from './SeachBar/SeachBar';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { useSelector, useDispatch } from 'react-redux';
import { myLoading, myError } from 'redux/selector';

export const App = () => {
  const isLoading = useSelector(myLoading);
  const error = useSelector(myError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Phonebook
      </h1>
      {/* <Block> */}
      <FormPhonebook />

      <h2
        style={{
          textAlign: 'center',
        }}
      >
        Contacts:
      </h2>
      <SearchBar />
      {isLoading && !error && <Loader />}
      <ListContact />

      {/* </Block> */}
    </>
  );
};

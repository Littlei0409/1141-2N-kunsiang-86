'use client';

import Wrapper from '../../_assets/_wrapper/Tutorials_28';

import {
  usePeopleContext_28,
  PeopleContextProvider_28,
} from './_context';

const PropDrilling_28 = () => {
  return (
    <PeopleContextProvider_28>
      <Wrapper>
        <div className='container'>
          <h3>Context API Demo</h3>
          <List />
        </div>
      </Wrapper>
    </PeopleContextProvider_28>
  );
};

const List = () => {
  const { people } = usePeopleContext_28();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = usePeopleContext_28();
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button className='btn' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling_28;

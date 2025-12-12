'use client';

import Wrapper from '../../_assets/_wrapper/Tutorials_86';

import { usePeopleContext_86, PeopleContextProvider_86 } from './_context';

// more components
// fix - context api, redux (for more complex cases)

const ContextPeople_86 = () => {
  return (
    <PeopleContextProvider_86>
      <Wrapper>
        <div className='container'>
          <h3>prop drilling</h3>
          <List />
        </div>
      </Wrapper>
    </PeopleContextProvider_86>
  );
};

const List = () => {
  const { people } = usePeopleContext_86();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = usePeopleContext_86();
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button className='btn' onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default ContextPeople_86;

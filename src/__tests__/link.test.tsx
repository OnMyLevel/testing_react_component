import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';

it('rend correctement', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
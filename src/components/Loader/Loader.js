import React, { Fragment } from 'react';
import { Spinner } from 'reactstrap';

const Loader = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <Spinner size="sm">Loading...</Spinner>
      <span> {data}</span>
    </Fragment>
  );
};

export { Loader };

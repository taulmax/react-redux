import React from 'react';
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return (
    <>
      <h1>What we have to do : {toDo?.text}</h1>
      <h3>Created at {toDo?.id}</h3>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { id } } } = ownProps;
  return {
    toDo: state.find(toDo => toDo.id === parseInt(id))
  }
}

export default connect(mapStateToProps)(Detail);
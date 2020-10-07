import React from 'react';
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from 'react-router-dom';

const ToDo = ({ text, deleteToDo, id }) => {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={deleteToDo}>DEL</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
        id: ownProps.id
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
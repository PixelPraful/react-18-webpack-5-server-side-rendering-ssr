import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                List of Users -
                <ul>
                    {
                        this.props.users.map((user) => {
                            return <li key={user.id}>{user?.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

const loadData = (store) => {
    return store.dispatch(fetchUsers());
};

export default {
    loadData,
    element: connect(mapStateToProps, { fetchUsers })(UsersList),
};

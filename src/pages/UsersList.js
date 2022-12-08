import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{`${this.props.users.length} Users App`}</title>
                    <meta property="og:title" content="Users App" />
                </Helmet>
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

import React from "react";
import { connect } from "react-redux";
import { fetchAdmins } from '../actions';
import requireAuth from "../hoc/requireAuth";

class AdminsList extends React.Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    render() {
        return (
            <div>
                Protected List of Admins -
                <ul>
                    {
                        this.props.admins.map((user) => {
                            return <li key={user.id}>{user?.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { admins: state.admins };
};

export default {
    loadData: ({ dispatch }) => dispatch(fetchAdmins()),
    element: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
};

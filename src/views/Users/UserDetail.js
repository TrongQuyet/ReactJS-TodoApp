import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
function withParams(Component) {
  return (props) => (
    <Component {...props} idparams={useParams()} Navigate={useNavigate()} />
  );
}
class UserDetail extends React.Component {
  state = {
    id: "",
    user: {},
  };
  async componentDidMount() {
    if (this.props.idparams) {
      let { id } = this.props.idparams;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log(res.data.data);
      this.setState({
        iduser: id,
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleback = () => {
    let Navigate = this.props.Navigate;
    Navigate(`/ListUsers`);
  };
  render() {
    let { iduser } = this.state;
    let { user } = this.state;
    let isemptyojb = Object.keys(user).length === 0;
    return (
      <>
        <span className="userdetail-title">
          {" "}
          day la user with id : {iduser}
        </span>
        {isemptyojb === false && (
          <>
            <div> first_name: {user.first_name}</div>
            <div> last_name: {user.last_name}</div>
            <div> email: {user.email} </div>
            <div>
              {" "}
              <img src={user.avatar} />{" "}
            </div>
            <div>
              <button onClick={() => this.handleback()}>Back</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withParams(UserDetail);

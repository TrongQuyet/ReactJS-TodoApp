import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let user = await axios.get("https://reqres.in/api/users");
    this.setState({
      listUser: user && user.data && user.data.data ? user.data.data : [],
    });
  }
  handleClick = (item) => {
    let navigate = this.props.navigate;
    navigate(`/ListUsers/${item.id}`);
    console.log(item.id);
  };
  render() {
    return (
      <div className="listuser-container">
        <div className="listuser-title">thông tin user</div>
        <div className="listuser-content">
          <span>
            {this.state.listUser &&
              this.state.listUser.length > 0 &&
              this.state.listUser.map((item, index) => {
                return (
                  <div
                    className="user"
                    key={item.id}
                    onClick={() => {
                      this.handleClick(item);
                    }}
                  >
                    <span>
                      {index + 1}-{item.email}
                    </span>
                  </div>
                );
              })}
          </span>
        </div>
      </div>
    );
  }
}
export default withParams(ListUser);

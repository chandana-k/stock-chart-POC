import React, { Component } from "react";
import "./searchForm.css";



let users = [
    {
      name: "AAPL",
      email: "APPLE INC."
    },
    {
      name: "MSFT",
      email: "MICROSOFT CORP."
    },
    {
      name: "AMZN",
      email: "AMAZON.COM,INC"
    },
    {
      name: "FB",
      email: "FACEBOOK, INC."
    },
    {
      name: "XOM",
      email: "EXXON MOBIL CORPORATION"
    },
    {
      name: "WMT",
      email: "WALMART INC."
    },
    {
      name: "V",
      email: "VISA INC."
    },
    {
      name: "BAC",
      email: "BANK OF AMERICA CORPORATION"
    },
    {
      name: "VZ",
      email: "VERIZON COMMUNICATIONS INC."
    },
    {
      name: "INTC",
      email: "INTEL CORPORATION"
    }
  ];
  
  class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchString: "",
        users: []
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.setState({
        users: users
      });
      this.refs.search.focus();
    }
  
    handleChange() {
      this.setState({
        searchString: this.refs.search.value
      });
    }
  
    render() {
      let _users = this.state.users;
      let search = this.state.searchString.trim().toLowerCase();
  
      if (search.length > 0) {
        _users = _users.filter(function(user) {
          return user.name.toLowerCase().match(search);
        });
      }
  
      return (
        <div>
          {/* <h3>React - simple search</h3> */}
          <div>
            <input
              type="text"
              value={this.state.searchString}
              ref="search"
              onChange={this.handleChange}
              placeholder="type name here"
            />
            <div>
              {_users.map(l => {
                return (
                  <p>
                    {l.name} <a href="#">{l.email}</a>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
  
//   ReactDOM.render(<Search />, document.getElementById("app"));
export default SearchForm;

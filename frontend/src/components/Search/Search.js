import React from "react";
import "./Search.scss";
class Search extends React.Component {
  state = {
    search: "",
    selection: this.props.defaultValue
  }

  // Search input   
  onInput = e => this.setState({ [e.target.id]: e.target.value });

  // Select the wrapper and toggle class 'focus'
  onFocus = e => e.target.parentNode.parentNode.classList.add('focus');
  onBlur = e => e.target.parentNode.parentNode.classList.remove('focus');

  // Select item
  onClickItem = item => this.setState({
    search: "",
    selection: item
  });

  render() {
    let { search, selection } = this.state;
    const data = this.props.dataset;
    if (!data) {
      return <p>Loading...</p>
    }
    let filtered = data.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    return (
      <div>
        <div className="wrapper">
          <div className="search">
            <input
              id="search"
              type="search"
              value={this.state.search}
              placeholder={this.props.searchHeader}
              onChange={this.onInput}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autoComplete="off"
            />
            <i className="fas fa-search"></i>
          </div>
          {search.length > 1 && filtered.length > 0 && (
            <ul className="list">
              {filtered.map(item => (
                <li onClick={() => this.onClickItem(item)}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <p className="result">
          <b>{selection}</b>
        </p>
      </div>
    )
  }
};

export default Search;

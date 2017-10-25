const App = () => (
  <div>
  <h2>My Grocery List</h2>
  <GroceryList items={[1, 2, 3]} />
  </div>
);

const GroceryList = (props) => (

  // let clickMe = (event) => {
  //   console.log('clickie');
  // };

  <ul>
  {props.items.map(item =>
    <GroceryListItem item={item} />
  )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  clickie() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.done ? 'bold': 'none'
    };

    return(
      <li style={style} onClick={this.clickie.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

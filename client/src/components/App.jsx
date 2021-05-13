import React from 'react';
import groceriesData from '../data/groceriesData.js';
import GroceryListItem from './GroceryListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceriesData: groceriesData,
      item: '',
      quantity: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // event.persist();
    // console.log(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    var newItem = {
      name: this.state.item,
      quantity: this.state.quantity
    }
    // console.log(newItem);
    this.setState({
      groceriesData: [...this.state.groceriesData, newItem]
    })
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Item
            <input name="item" placeholder="Item" onChange={this.handleChange}/>
          </label>
          <label> Quantity
            <input name="quantity" placeholder="Quantity" onChange={this.handleChange} />
          </label>
          <button>Add Grocery</button>
          <ul className="groceries">
            {this.state.groceriesData.map((item, index) =>
              <GroceryListItem item={item} key={index} />
            )}
          </ul>
        </form>
      </div>
    )
  }
}

export default App;

// const App = () => (
//   <div>
//     <img src="grocery-bags.png" />
//     <h1>Grocery List</h1>
//     <form>
//       <label> Item
//         <input name="item" value="" />
//       </label>
//       <label> Quantity
//         <input name="quantity" value="" />
//       </label>
//       <button>Add Grocery</button>
//       <ul className="groceries">
//         <li>
//           <span>apples - </span>
//           <span>4</span>
//         </li>
//         <li>
//           <span>bread - </span>
//           <span>2</span>
//         </li>
//         <li>
//           <span>etc...</span>
//         </li>
//       </ul>
//     </form>
//   </div>
// );
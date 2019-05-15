import React, { Component } from "react";
// import "../donotremove.css";

export default class Row extends Component {

  render() {
    const { item, updateItem, removeItem } = this.props;
    return (
      <tr>
        <td>
          <div>{item.id}</div>
        </td>
        <td>
          <div>
            <input
              type="text"
              name="description"
              value={item.description}
              placeholder="Proj Title"
              onChange={e => updateItem(e, item.id)}
            />
          </div>
        </td>
        <td>
          <div>
            <input
              type="text"
              name="hours"
              value={item.hours}
              placeholder="Hours"
              onChange={e => updateItem(e, item.id)}
            />
          </div>
        </td>
        <td>
          <div>
            <input
              type="text"
              min="0"
              name="rate"
              value={item.rate}
              placeholder="$0.00"
              onChange={e => updateItem(e, item.id)}
            />
          </div>
        </td>
        <td>
          <div>
            <input
              type="text"
              min="0"
              name="Total"
              value={item.rate * item.hours}
              placeholder="$0.00"
              onChange={e => updateItem(e, item.id)}
            />
          </div>
        </td>
        <td>
          <div>
            <button onClick={() => removeItem(item.id)} id="removeBtn">x</button>
          </div>
        </td>
      </tr>
    );
  }
}

import { useState } from "react";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem, onDeleteList}){
    const [sortBy, setSortBy] = useState('input');
  
    let sortedItems;
  
    switch(sortBy){
      case 'input':
        sortedItems =items;
        break;
      case 'description':
        sortedItems = items
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description));
        break;
      case 'packed':
        sortedItems = items
          .slice()
          .sort((a, b) => a.packed - b.packed);
        break;
      default:
        sortedItems = items
    }
    return (
      <div className="list">
        <ul >
          {sortedItems.map((item)=>
            <Item 
              item={item} 
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem} 
              key={item.id}
            />
            )} 
        </ul>
  
        <div className="actions">
          <select 
            value={sortBy} 
            onChange={(e)=>setSortBy(e.target.value)}
          >
            <option value='input'>
              Sort by input order
            </option>
            <option value='description'>
              Sort by description
            </option>
            <option value='packed'>
              Sort by packed status
            </option>
          </select>
          <button onClick={onDeleteList}>
            Clear List
          </button>
        </div>
  
      </div>
    );
  }
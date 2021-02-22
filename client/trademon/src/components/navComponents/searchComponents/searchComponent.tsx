import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTrade } from '../../../store/standardTileSlice';

export default function SearchComponent() {
  const [world, setWorld] = useState('Pokemon GO');
  const dispatch = useDispatch();
  const changeWorldSelector = (world: string) => {
    setWorld(world);
    console.log('world', world);
  };

  const handleSearchKeyPress = (searchString: string) => {
    dispatch(filterTrade(searchString, world));
    console.log('handleSearchKeyPress: I am invoked ... ', searchString, world);
  };

  return (
    <div className="filters-box">
      <select
        className="search-select-dropdown"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
          changeWorldSelector(e.target.value)
        }
      >
        <option value="Pokemon">Pokemon Go</option>
        <option value="MTG">MTG: Online</option>
        <option value="WoW">Warcraft</option>
      </select>
      <input
        type="text"
        placeholder="Search offers..."
        id="search-field"
        className="search-field"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleSearchKeyPress(e.target.value)
        }
      />
    </div>
  );
}

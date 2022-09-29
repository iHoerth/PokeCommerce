
const FilterSection = ({search,searchPokemon}) => {

  return (
    <div id="searchWrapper">
      <div id="searchName" style={{display:'flex',alignItems:'center',}}>
        {/* <p style={{fontSize:'32px',marginRight:'10px'}}>SEARCH POKEMON:</p> */}
        {/* <input style={{fontSize:'20px', width:'600px',height:'40px',padding:'5px'}} onKeyUp={(event) => setSearchValue(event.target.value)} id="searchInput" name="searchInput" placeholder="SEARCH POKEMON" type="text" /> */}
      </div>
      {/* <form id='typeSearch' action="">
        <div id="typeWrapper">
          <p>FILTER BY TYPE:</p>
          <select name="typeFilter" id="typeFilter">
            <option value="all">All types</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="rock">Rock</option>
            <option value="ground">Ground</option>
            <option value="poison">Poison</option>
            <option value="bug">Bug</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="ghost">Ghost</option>
            <option value="psychic">Psychic</option>
            <option value="normal">Normal</option>
            <option value="flying">Flying</option>
            <option value="steel">Steel</option>
          </select>
          <select name="typeFilter2" id="typeFilter2">
            <option value="all">All types</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="rock">Rock</option>
            <option value="ground">Ground</option>
            <option value="poison">Poison</option>
            <option value="bug">Bug</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="ghost">Ghost</option>
            <option value="psychic">Psychic</option>
            <option value="normal">Normal</option>
            <option value="flying">Flying</option>
            <option value="steel">Steel</option>
          </select>
        </div>
      </form> */}
    </div> 
  )
}

export default FilterSection
import React from "react";

const DropdownMenu = () => {
  return (
    <div className="flex justify-center items-center mt-9">
      <select
        onChange={handleChange}
        className="select flex outline-none focus:outline-none border-[#4CCE5B] focus:border-[#4CCE5B]  select-info w-full max-w-[200px]"
        defaultValue={sortOption}
      >
        <option disabled value="">
          Customization
        </option>
        <option value="yes">yes</option>
        <option value="no">no</option>
      </select>
    </div>
  );
};

export default DropdownMenu;

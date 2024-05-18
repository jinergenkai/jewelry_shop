import DropdownMenu from "./dropdown-menu"

export default function FilterCard() {
  return (
<div className="flex items-center justify-center px-8 py-2 space-x-8 bg-white">
          <DropdownMenu
            label="Shop By"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Categories"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Material"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Color"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Price Range"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </div>


  );
}
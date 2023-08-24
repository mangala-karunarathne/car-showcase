"use client"

import { CustomFilterProps } from "@/types"
import { Listbox } from "@headlessui/react"
import { useState } from "react"

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div className="w-fit">
      <Listbox
      value={selected}
      onChange={(e)=> setSelected(e)}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-bilter__butn">
            <span>Filter</span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
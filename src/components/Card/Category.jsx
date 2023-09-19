import { Tooltip, Button } from "@material-tailwind/react"

const Category = () => {
  return (
    <>
      <div className="mx-[150px] m-[25px]">
        <Tooltip content="Material Tailwind" placement="bottom" >
          <Button className='w-[10em] h-[10em]'>Food</Button>
        </Tooltip>
      </div>
    </>
  )
}

export default Category

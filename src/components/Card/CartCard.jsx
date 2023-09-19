import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Checkbox,
} from "@material-tailwind/react";

export function CartCard() {
  return (
    <>
      <Card className="w-full max-w-[50rem] max-h-[15rem] flex-row m-[25px]">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-[30%] shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover rounded-xl"
          />

        </CardHeader>
        <CardBody>
          <div className="">
            <Typography color="gray" className="text-[18px] font-bold">
              IDR Shop
            </Typography>
            <Typography color="blue-gray" className="text-[14px]">
              Kab. Tangerang
            </Typography>
            <Typography color="gray" className="text-[16px] font-normal my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia tempore laboriosam unde eos accusantium ab explicabo quia asperiores quidem.
            </Typography>

            <Typography color="blue-gray" className="text-[16px] font-bold">
              Rp <span>90.000</span> 
            </Typography>
          <Checkbox defaultChecked/>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
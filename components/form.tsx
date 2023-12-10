'use client'

import { FormSubmit } from "@/lib/ServerActions"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";


const Form = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await FormSubmit(data);
    console.log({ res });
    if (res) {
      router.push('/thankyou')
    }

  };
  return (
    <div className="h-full w-full flex justify-center items-center">

      <form onSubmit={handleSubmit} className='w-full max-w-2xl h-4/6 border-2 rounded-md shadow-sm  shadow-black dark:shadow-neutral-500 space-y-3 p-4'>
        <input type="text" name='name' id='name' placeholder='Enter your name' required
          className="w-full p-2 text-black dark:text-neutral-200 rounded-md bg-neutral-800 text-sm"
        />
      <div  className="p-2 w-full text-start rounded-md bg-neutral-800 text-neutral-200" >
          <select name="interest" id="interest" className="w-full bg-neutral-800 text-neutral-200 text-sm" >
          <option value="Computer Science" className="text-neutral-200 placeholder:text-neutral-500 text-sm">Computer Science</option>
          <option value="HR Management" className="text-neutral-200 placeholder:text-neutral-500 text-sm">HR Management</option>
          <option value="Medical" className="text-neutral-200 placeholder:text-neutral-500 text-sm">Medical</option>
          <option value="Technology" className="text-neutral-200 placeholder:text-neutral-500 text-sm">Technology</option>
          <option value="Machanicals" className="text-neutral-200 placeholder:text-neutral-500 text-sm">Machanicals</option>
          <option value="Agriculture" className="text-neutral-200 placeholder:text-neutral-500 text-sm">Agriculture</option>
        </select>
      </div>
      


        <Button size='sm' variant='outline' className="w-full" type="submit">
          submit
        </Button>
      </form>

    </div>

  )
}

export default Form

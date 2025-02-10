"use client"

import { useForm } from "react-hook-form"
import * as  z  from "zod"
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../utils/button"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ready to watch? Enter your email to create or restart your membership.</FormLabel>
                  <FormControl className="text-sm">
                    <Input className=" h-12 bg-black/70" placeholder="Email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" text-lg font-medium h-12 w-40">
                <Button>
                    <button type="submit">Get Started</button>
                    <ArrowForwardIosIcon />
                </Button>
            </div>
          </form>
        </Form>
      )
  }

export const LoginForm = () => {

}

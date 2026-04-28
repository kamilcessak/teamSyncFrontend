import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    name: z.string().min(3, { message: "Nazwa projektu musi mieć co najmniej 3 znaki. "}),
    description: z.string().max(300, { message: "Opis może mieć maksymalnie 300 znaków." }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function CreateProjectDialog() {

  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        description: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Nowy projekt:", values);
    setOpen(false);
    form.reset();
  }

  return (

    <Dialog open={open} onOpenChange={setOpen}>
      
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Dodaj projekt
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Utwórz nowy projekt</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwa projektu</FormLabel>
                  <FormControl>
                    <Input placeholder="np. Nowy projekt" {...field} />
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opis (opcjonalnie)</FormLabel>
                  <FormControl>
                    <Input placeholder="Cel projektu..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Anuluj
              </Button>
              <Button type="submit">Zapisz projekt</Button>
            </div>

          </form>
        </Form>
        
      </DialogContent>
    </Dialog>
  );
}
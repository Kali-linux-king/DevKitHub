declare module '@/components/ui/textarea' {
  import { ForwardRefExoticComponent, TextareaHTMLAttributes, RefAttributes } from 'react';
  export const Textarea: ForwardRefExoticComponent<
    TextareaHTMLAttributes<HTMLTextAreaElement> & 
    RefAttributes<HTMLTextAreaElement>
  >;
}

'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Edit2 } from 'lucide-react'
import FullNameForm from './full-name-form'
import EmailForm from './email-form'

function EditInformation() {
	return (
		<>
			<div className='w-full h-52 bg-secondary flex justify-center items-center'>
				<div className='relative'>
					<Avatar className='size-32'>
						{/* <AvatarImage src='https://github.com/shadcn.png' /> */}
						<AvatarFallback className='bg-primary text-white text-6xl'>
							ZN
						</AvatarFallback>
					</Avatar>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								size={'icon'}
								className='border absolute right-0 bottom-0 rounded-full border-primary'
								variant={'secondary'}>
								<Edit2 />
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle></DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
			</div>
			<div className='my-3 bg-secondary px-4'>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger>
							<div className='flex flex-col space-y-0'>
								<h2 className='font-bold'>Full name</h2>
								<p className='text-muted-foreground'>Tursunov Abdulloh</p>
							</div>
						</AccordionTrigger>
						<AccordionContent className='border-l border-l-primary pl-4'>
							<FullNameForm />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>
							<div className='flex flex-col space-y-0'>
								<h2 className='font-bold'>Email</h2>
								<p className='text-muted-foreground'>info@zencode.now</p>
							</div>
						</AccordionTrigger>
						<AccordionContent className='border-l border-l-primary pl-4'>
							<EmailForm />
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</>
	)
}

export default EditInformation

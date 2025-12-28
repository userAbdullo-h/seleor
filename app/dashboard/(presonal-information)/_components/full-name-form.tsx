'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { fullNameScheme } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

function FullNameForm() {
	const form = useForm<z.infer<typeof fullNameScheme>>({
		resolver: zodResolver(fullNameScheme),
		defaultValues: { fullName: '' },
	})

	async function onSubmit(values: z.infer<typeof fullNameScheme>) {
		console.log(values)
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='fullName'
					render={({ field }) => (
						<FormItem className='space-y-0'>
							<Label className='text-xs'>Full name</Label>
							<FormControl>
								<Input
									placeholder='Enter your full name'
									type='text'
									className='bg-white'
									{...field}
								/>
							</FormControl>
							<FormMessage className='text-xs text-red-500' />
						</FormItem>
					)}
				/>
				<Button className='self-end mb-0.5 mt-2' type='submit' size={'sm'}>
					Submit
				</Button>
			</form>
		</Form>
	)
}

export default FullNameForm

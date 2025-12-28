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
import { emailScheme } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

function EmailForm() {
	const form = useForm<z.infer<typeof emailScheme>>({
		resolver: zodResolver(emailScheme),
		defaultValues: { email: '' },
	})

	async function onSubmit(values: z.infer<typeof emailScheme>) {
		console.log(values)
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem className='space-y-0'>
							<Label className='text-xs'>Email</Label>
							<FormControl>
								<Input
									placeholder='Enter your email'
									type='email'
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

export default EmailForm

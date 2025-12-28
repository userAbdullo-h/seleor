'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

function SignUpPage() {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			fullName: '',
		},
	})

	function onSubmit(values: z.infer<typeof registerSchema>) {
		console.log(values)
	}
	return (
		<Card className='w-1/2 p-4'>
			<h1 className='text-xl font-bold'>Sign Up</h1>
			<p className='text-sm text-muted-foreground'>
				Welcome to ! Please sign in to your account.
			</p>
			<Separator className='my-3' />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='fullName'
						render={({ field }) => (
							<FormItem className='space-y-0'>
								<FormLabel>Full name</FormLabel>
								<FormControl>
									<Input placeholder='Enter your full name' {...field} />
								</FormControl>
								<FormMessage className='text-xs text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='space-y-0'>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder='Enter your email' {...field} />
								</FormControl>
								<FormMessage className='text-xs text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem className='space-y-0'>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder='********' type='password' {...field} />
								</FormControl>
								<FormMessage className='text-xs text-red-500' />
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
			<div className='mt-4'>
				<p className='text-sm text-muted-foreground'>
					Already have an account?{' '}
					<Button asChild variant='link' className='p-0'>
						<Link href={'/sign-in'}>Sign In</Link>
					</Button>
				</p>
			</div>
		</Card>
	)
}

export default SignUpPage

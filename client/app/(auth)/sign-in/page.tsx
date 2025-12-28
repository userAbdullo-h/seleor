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
import { loginSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

function SignInPage() {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(values: z.infer<typeof loginSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}
	return (
		<Card className='w-1/2 p-4'>
			<h1 className='text-xl font-bold'>Sign In</h1>
			<p className='text-sm text-muted-foreground'>
				Welcome back! Please sign in to your account.
			</p>
			<Separator className='my-3' />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
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
					Don&apos;t have an account?{' '}
					<Button asChild variant='link' className='p-0'>
						<Link href={'/sign-up'}>Sign Up</Link>
					</Button>
				</p>
			</div>
		</Card>
	)
}

export default SignInPage

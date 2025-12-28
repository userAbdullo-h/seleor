import { z } from 'zod'

export const loginSchema = z.object({
	email: z.email().min(1, 'Email is required'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export const registerSchema = z.object({
	fullName: z.string().min(3, 'Full name is required'),
	email: z.email().min(1, 'Email is required'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export const fullNameScheme = z.object({
	fullName: z.string().min(3, 'Full name is required'),
})
export const emailScheme = z.object({
	email: z.email('Invalid email address'),
})

export const passwordSchema = z
	.object({
		oldPassword: z
			.string()
			.min(8, 'Password must be at least 8 characters long'),
		newPassword: z
			.string()
			.min(8, 'Password must be at least 8 characters long'),
		confirmPassword: z
			.string()
			.min(8, 'Password must be at least 8 characters long'),
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	})

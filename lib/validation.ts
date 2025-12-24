import { email, z } from 'zod'

export const loginSchema = z.object({
	email: z.email().min(1, 'Email is required'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export const registerSchema = z.object({
	fullName: z.string().min(3, 'Full name is required'),
	email: z.email().min(1, 'Email is required'),
	password: z.string().min(8, 'Password must be at least 8 characters long'),
})

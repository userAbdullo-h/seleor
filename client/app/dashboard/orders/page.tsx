import Filter from '@/components/shared/filter'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { products } from '@/lib/constants'

function Page() {
	return (
		<>
			<div className='flex justify-between items-center w-full'>
				<h1 className='text-xl font-bold'>Orders</h1>
				<Filter />
			</div>
			<Separator className='my-2' />
			<Table className='text-sm'>
				<TableCaption>A list of your recent orders.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Price</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Product</TableHead>
						<TableHead>Order Time</TableHead>
						<TableHead className='text-right'>Updated Time</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.map(product => (
						<TableRow key={product._id}>
							<TableCell>{product.price}</TableCell>
							<TableCell>Paid</TableCell>
							<TableCell>{product.title}</TableCell>
							<TableCell>10 nov 2025</TableCell>
							<TableCell className='text-right'>12 nov 2025</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}

export default Page

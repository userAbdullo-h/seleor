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
import { formatPrice } from '@/lib/utils'

function Page() {
	return (
		<>
			<div className='flex justify-between items-center w-full'>
				<h1 className='text-xl font-bold'>Orders</h1>
				<Filter />
			</div>
			<Separator className='my-2' />
			<Table className='text-sm'>
				<TableCaption>A list of your recent payments.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Product</TableHead>
						<TableHead>Provider</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className='text-right'>Price</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.map(product => (
						<TableRow key={product._id}>
							<TableCell>{product.title}</TableCell>
							<TableCell>Click</TableCell>
							<TableCell>Success</TableCell>
							<TableCell className='text-right'>
								{formatPrice(product.price)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}

export default Page

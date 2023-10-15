'use client'

import { Button } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'

const PaginationControls = (
    {
        hasNextPage,
        hasPrevPage,
        totalData
    }
) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '6'

    return (
        <div className='flex gap-2 justify-center py-12 items-center'>
            <Button
                type='primary'
                disabled={!hasPrevPage}
                onClick={() => {
                    router.push(`services/?page=${Number(page) - 1}&per_page=${per_page}`)
                }}>
                prev page
            </Button>

            <div>
                {page} / {Math.ceil(totalData / Number(per_page))}
            </div>

            <Button
                type='primary'
                disabled={!hasNextPage}
                onClick={() => {
                    router.push(`services/?page=${Number(page) + 1}&per_page=${per_page}`)
                }}>
                next page
            </Button>
        </div>
    )
}

export default PaginationControls